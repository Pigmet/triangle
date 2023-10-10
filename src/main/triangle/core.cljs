(ns triangle.core
  (:require  [reagent.core :as r]
             [reagent.dom :as rdom]
             [medley.core :as med]
             [goog.string :refer [format]]
             ["react-dom/client" :refer [createRoot]]
             ["react-konva" :as konva :refer [Stage Layer Rect Line Circle Group Text]]
             [triangle.calc :as calc]))

(def stage (r/adapt-react-class Stage))

(def layer (r/adapt-react-class Layer))

(def rect (r/adapt-react-class Rect))

(def line (r/adapt-react-class Line))

(def circle (r/adapt-react-class Circle))

(def group (r/adapt-react-class Group))

(def text (r/adapt-react-class Text))

(defn- window-width [] (. js/window -innerWidth))

(defn- window-height [] (. js/window -innerHeight))

(def init-vertex (map #(calc/add % [200 200]) [[0 0] [200 0] [100 -100]]))

(def state-vertex (r/atom (zipmap [:a :b :c] init-vertex)))

(def point-size 7)

(def center-color-table {:circumcenter "orange"
                         :incenter "blue"
                         :orthocenter "gray"
                         :centroid "red"})

(def state-center (r/atom (zipmap (keys center-color-table) (repeat false))))

(defn get-xy [e]
  (let [t (. e -target)]
    [(. t x) (. t y)]))

(defn- change-cursor [e s]
  (set!  (.. e -target getStage container -style -cursor) s))

(defn vertex [k]
  (let [[x y] (k @state-vertex)]
    [circle {:x x :y y :stroke "black" :radius point-size
             :on-mouse-enter (fn [e] (.. e -target (fill "black")))
             :on-mouse-out (fn [e] (.. e -target (fill nil)))
             :draggable true
             :on-drag-move (fn [e]
                             (swap! state-vertex assoc k (get-xy e)))}]))

;; I still don't figure out how to drag the triangle so that
;; it moves the vertices properly.

(defn triangle []
  (let  [{:keys [a b c]} @state-vertex]
    [group
     {:draggable true}
     [line {:points (flatten [a b c])
            :closed true
            :on-mouse-enter #(change-cursor % "pointer")
            :on-mouse-out #(change-cursor % nil)
            :stroke "black"}]
     [vertex :a]
     [vertex :b]
     [vertex :c]]))

(defn select-center []
  (let [style (fn [k] {:text-decoration "underline"
                       :text-decoration-thickness 3
                       :text-decoration-color (k center-color-table)})]
    [:fieldset
     {:style {:display "flex"
              :height 120}}
     [:legend "Select"]
     [:table
      (into [:tbody]
            (for [[k v] center-color-table]
              [:tr [:td {:style (style k) } (name k)]
               [:td [:input {:type "checkbox"
                             :on-change (fn [e]
                                          (let [t (.. e -target -checked)]
                                            (swap! state-center assoc k t)))}]]]))]]))

(defn point [x y color]
  [circle {:x x :y y :fill color :radius point-size}])

(defn show?
  "Should we display this center? It also checks
  if the three points makes a triangle and returns false
  if they don't."
  [k]
  (let [{:keys [a b c]} @state-vertex]
    (and (calc/triangle? a b c)
         (k @state-center))))

(defn circumcenter []
  (when (show? :circumcenter )
    (let [{:keys [a b c]} @state-vertex
          {:keys [p r]} (calc/circumcenter-data a b c)
          [x y] p
          color (:circumcenter center-color-table)]
      [group
       [point x y color]
       [circle {:x x :y y :radius r :stroke color}]])))

(defn incenter []
  (when (show? :incenter)
    (let [{:keys [a b c]} @state-vertex
          {:keys [p r]} (calc/incenter-data a b c)
          [x y] p
          color (:incenter center-color-table)]
      [group
       [point x y color]
       [circle {:x x :y y :radius r :stroke color}]])))

(defn centroid []
  (when (show? :centroid)
    (let [{:keys [a b c]} @state-vertex
          [x y] (calc/mul (/ 1 3) (calc/add a b c))
          color (:centroid center-color-table)]
      [point x y color])))

(defn ray [start dir &{:keys [color half?]
                       :or {color "black"
                            half? false}}]
  (let [r (+ (window-width) (window-height))
        v (calc/mul r dir)
        start1 (if half? start (calc/sub start v))
        end (calc/add start v)]
    [line {:points (flatten [start1 end])
           :stroke color
           :dash [5 5]}]))

(defn orthocenter []
  (when (show? :orthocenter)
    (let [{:keys [a b c]} @state-vertex
          {:keys [p rays]} (calc/orthocenter-data a b c)
          [x y] p
          color (:orthocenter center-color-table)]
      (into [group [point x y color]]
            (for [{:keys [start dir]} rays] (ray start dir :color color))))))

(defn canvas []
  [stage {:width (window-width)
          :height (window-height)}
   [layer
    ;; the latter shapes are displayed in front of the former ones.
    [circumcenter]
    [incenter]
    [centroid]
    [orthocenter]
    [triangle]
    ]])

(defn main []
  [:div
   [:h2 "The four triangle centers"]
   [:div {:style {:display "flex"
                  :width (window-width)
                  :height (window-height)
                  :flex-direction "row"}}
    [select-center]
    [canvas]]])

;;;;;;;;;;;;;;;;;
;; render main ;;
;;;;;;;;;;;;;;;;;

(defonce root (createRoot (js/document.getElementById "root")))

(defn render-main []
  (r/create-class
   {:component-name "my-main"
    :reagent-render main}))

(defn init []  (.render root (r/as-element [render-main])))

(init)
