define([ "jquery", "backbone","../recipes", "collections/RecipeCollection","views/RecipeCollectionView" ], function( $, Backbone,recipes,RecipeCollection,RecipeCollectionView) {
    var view = Backbone.View.extend( {
        el: "#main",
        initialize: function () {
            this.recipes = new RecipeCollection(recipes);
            //this.render();
        },
        render: function () {
            this.$el
                .empty()
                .append(new RecipeCollectionView({ collection: this.recipes }).render().el)
            return this;
        }
    });
    return view;
} );