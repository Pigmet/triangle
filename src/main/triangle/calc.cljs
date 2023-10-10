(ns triangle.calc
  (:require ["mathjs" :as math]))

(defn- deep-array [x]
  (if (sequential? x) (into-array (map deep-array x)) x))

(defn mul
  ([] 1)
  ([x] (js->clj x))
  ([x y] (js->clj (math/multiply (deep-array x) (deep-array y))))
  ([x y & more] (reduce mul (mul x y) more)))

(defn add
  ([] 0)
  ([x] (js->clj x))
  ([x y] (js->clj (math/add (deep-array x) (deep-array y))))
  ([x y & more] (reduce add (add x y) more)))

(defn sub
  ([] 0)
  ([x] (js->clj (mul -1 x)))
  ([x y] (js->clj (math/subtract (deep-array x) (deep-array y))))
  ([x y & more] (reduce sub (sub x y) more)))

(defn norm [x] (math/norm (deep-array x)))

(defn distance [x y] (math/distance (deep-array x) (deep-array y)))

(defn det [m] (math/det (deep-array m)))

(defn triangle? [a b c]
  (not (zero? (det [(sub b a) (sub c a)]))))

(defn solve [m a]
  (into []  (flatten (js->clj (math/lusolve (deep-array m) (deep-array a))))))

(defn- normalize [v] (let [n (norm v)] (mul (/ 1 n) v)))

(defn- normal-vector [[x y]] (normalize [y (- x)]))

(defn- line-data [a b c] {:a a :b b :c c})

(defn- intersection-point [l1 l2]
  (let [{:keys [a b c]} l1
        {aa :a bb :b cc :c} l2
        m [[a b] [aa bb]]
        v [(- c) (- cc)]]
    (solve m v)))

(defn- line-from-normal [n [x y]]
  (let [[p q] n]
    (line-data p q (- (mul n [x y])))))

(defn- mid-point [a b] (mul (/ 1 2) (add a b)))

(defn- perpendicular-bisector [a b]
  (line-from-normal (sub a b) (mid-point a b)))

(defn circumcenter-data [a b c]
  (let [l1 (perpendicular-bisector a b)
        l2 (perpendicular-bisector a c)
        p (intersection-point l1 l2)
        r (distance p a)]
    {:p p :r r}))

(defn- line-from-dir [dir [x y]]
  (let [[a b] (normal-vector dir)
        c (- (mul [a b] [x y]))]
    (line-data a b c)))

(defn- point-line-distance [p line]
  (let [[x y] p
        {:keys [a b c]} line]
    (/ (math/abs (mul [a b c] [x y 1]))
       (norm [a b]))))

(defn- angle-bisector [a b c]
  (let [v1 (normalize (sub a b))
        v2 (normalize (sub c b))]
    (line-from-dir (add v1 v2) b)))

(defn incenter-data [a b c]
  (let [l1 (angle-bisector a b c)
        l2 (angle-bisector b c a)
        side (line-from-dir  (sub a b) a)
        p (intersection-point l1 l2)
        r (point-line-distance p side)]
    {:p p :r r }))

(defn orthocenter-data [a b c]
  (let [l1 (line-from-dir  (normal-vector (sub b c)) a)
        l2 (line-from-dir (normal-vector (sub c a)) b)
        p (intersection-point l1 l2)
        normal-dir (fn [x y] (normal-vector (sub x y)))]
    {:p p
     :rays [{:dir (normal-dir b c) :start a }
            {:dir (normal-dir c a) :start b}
            {:dir (normal-dir a b) :start c}]}))
