function APP() {
    this.previewProducts = [
        { id: 1, name: "PS4", description: "Game console", value: 399 },
        { id: 2, name: "Xbox-one", description: "Game console", value: 499 },
        { id: 3, name: "Macbook Air", description: "Ultrabook", value: 999 },
        { id: 4, name: "Macbook Pro", description: "Laptop", value: 1299 },
        { id: 5, name: "Iphone 6", description: "Phone", value: 299 }
    ];

    this.MerchantProducts = [
        { id: 1, name: "PS4", description: "Game console", value: 399, width: 200, length: 300, weight: 799, height: 20},
        { id: 2, name: "Xbox-one", description: "Game console", value: 499, width: 200, length: 300, weight: 899, height: 20},
        { id: 3, name: "Macbook Air", description: "Ultrabook", value: 999, width: 400, length: 300, weight: 2345, height: 10},
        { id: 4, name: "Macbook Pro", description: "Laptop", value: 1299, width: 500, length: 400, weight: 3456, height: 15},
        { id: 5, name: "Iphone 6", description: "Phone", value: 299, width: 20, length: 50, weight: 150, height: 5}
    ];

}

APP.prototype.start = function() {
    define(
        ["jquery",
            "lib/backbone",
            "router"
        ],
        function ($, Backbone, Router) {
                this.routes = new Router();
                Backbone.history.start();
        }
    );

}()

