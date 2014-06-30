require.config({
    paths: {
        'jquery': 'lib/jquery',
        'text': 'lib/text',
        'templates': '/app/templates'
    },
    shim: {
        'lib/underscore': {
            exports: '_'
        },
        'lib/backbone': {
            deps: ["lib/underscore", "jquery"],
            exports: 'Backbone'
        }
    }
});
require(
    ["jquery",
        "app",
        "collections/products",
        "views/layout"
    ],
    function ($, App, Products, LayoutView) {
        $(function () {
            var MyApp = new APP();
            MyApp.collection = new Products(MyApp.previewProducts);
            MyApp.collection.comparator = function (product) {
                return parseFloat(product.get("value"));
            };
            MyApp.collection.fetch().success(function (data) {
                var layout = new LayoutView({collection: MyApp.collection});
            });
        });
    }
);

