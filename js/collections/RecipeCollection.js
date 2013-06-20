define(["backbone","models/RecipeModel" ], function(Backbone,RecipeModel ) {
    var Collection = Backbone.Collection.extend( {
        model: RecipeModel
    });
    return Collection;
});