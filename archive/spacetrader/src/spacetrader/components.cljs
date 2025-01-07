(ns spacetrader.components
  (:require [reagent.core :as r]))

;; Resource Board  
(defn permanent-resource 
  ([card-freqs key]
    (permanent-resource card-freqs key ""))
  ([card-freqs key class]
	  ^{:key (name key)}
    [:div {:class (str "res res-" (name key) class)}
      [:span {:class "res-count"} (key card-freqs 0)]]))

(defn render-card [card]
  ^{:key (:id card)}
    [:div {:class (str "card card-back-" (name (:deck card)))
          :on-click (fn [e]
	                   (.preventDefault e)
	                   (println (:id card)))}
      [:div {:class (str "res-banner res-" (name (:col card)))}
        [:div {:class "pull-right"} (:vp card)]]
      [:div {:class "res-cost"}
        (map #(permanent-resource (:cost card) % " res-icon-small") (keys (:cost card)))
        ]])

(defn card-row-shown [cards]
  (map render-card cards))
  
(defn card-row-identifier [deck count]  
  [:div {:class (str "card card-deck card-back-" (name deck))} [:h3 count]])

(defn card-rows [cards deck]
  (let [unavailable-resource-counts 
       (->> cards (filter #(= (:owner %) nil)) (filter #(= (:position %) nil)) (map :deck) frequencies)]
     ^{:key deck}
     [:div {:class "row"}
	     (card-row-identifier deck (deck unavailable-resource-counts 0))
	     (card-row-shown (->> cards(sort-by :position) (filter :position) (filter #(= (:deck %) deck))))]))

;; Active Player Space
(defn permanent-resources [cards]
  (let [card-freqs (frequencies (map :col cards))]
    (map #(permanent-resource card-freqs %) [:black :white :red :blue :green])
    ;;(map #(temp-resource card-freqs %) [:black :white :red :blue :green])
    ))

(defn active-player [game]
  (let [pid (:active-player game) player (get-in game [:players pid])]
    [:div 
		  [:h3 (str (:name player) "  VP:" (:vp player))]
		  [:div (permanent-resources (filter #(= (:owner %) pid) (:cards game)))]]))
		
(defn Game [game]
  [:div ;;data-reactroot
    [:div {:class "container"}
      [:div {:class "row"}
   	    [:div {:class "col-md-8"}
          (map #(card-rows (:cards game) %) [:3 :2 :1])]
   		  [:div {:class "col-md-4"}
          (active-player game)]]
   	  [:div {:class "row"}
   	    [:div {:class "col-md-12"}]]]])
  
(defn render-game [game container]
  (r/render [Game game] container))