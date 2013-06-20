define([ "jquery", "backbone"], function( $, Backbone) {
    var view = Backbone.View.extend( {
        template: _.template($("#recipeModelView").html()),
        render: function () {
            this.el.innerHTML = this.template(this.model.toJSON());
            return this;
        }
    });
    return view;
} );