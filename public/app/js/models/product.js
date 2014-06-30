/**
 * Created by ajaykadus on 6/23/14.
 */
define(["lib/backbone"], function (Backbone) {
    var Product = Backbone.Model.extend({
        idAttribute: '_id',
        urlRoot: '/products',
        parse: function (data, options) {
            this.set('image', data.image || "images/product_default.jpg")
            this.set('id', data._id);
            return _.isArray(data)? data[0] : data;
        },
        getImage: function() {
            return (this.get('image') || this.get('image') !== "")? this.get('image') : "images/product_default.jpg"
        }
    });


    return Product;
});
