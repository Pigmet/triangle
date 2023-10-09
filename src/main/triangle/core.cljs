(ns triangle.core
  (:require  [reagent.core :as r]
             [reagent.dom :as rdom]
             ["react-dom/client" :refer [createRoot]]))

(defn main []
  [:div "hello world"])

(defonce root (createRoot (js/document.getElementById "root")))

(defn render-main []
  (r/create-class
   {:component-name "my-main"
    :reagent-render main}))

(defn init []  (.render root (r/as-element [render-main])))

(init)
