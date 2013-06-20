define(["backbone","views/RecipeModelView" ], function(Backbone, RecipeModelView ) {
    var view = Backbone.View.extend( {
        template: _.template('<h1><%=length%> Recipes</h1>'),
        render: function () {
            this.el.innerHTML = this.template({ length: this.collection.length });
            this.collection.forEach(function (model) {
                this.el.appendChild(new RecipeModelView({ model: model}).render().el);
            }, this);
            return this;
        }
    });
    return view;
} );