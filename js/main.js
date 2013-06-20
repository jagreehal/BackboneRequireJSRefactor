require.config( {
    paths: {
        "jquery": "libs/jquery",
        "underscore": "libs/lodash",
        "backbone": "libs/backbone"
    },

    // AMD incompatible
    shim: {
        "backbone": {
            "deps": [ "underscore", "jquery" ],
            "exports": "Backbone"
        }
    }
} );

require(["views/AppView"], function(AppView) {
    new AppView().render();
} );