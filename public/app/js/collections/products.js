/**
 * Created by ajaykadus on 6/23/14.
 */
define(["lib/backbone", "models/product"], function(Backbone, Product) {
    var Products = Backbone.Collection.extend({
        url: '/products',
        model: Product
    });
    return Products;
});
