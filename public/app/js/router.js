/**
 * Created by ajaykadus on 6/25/14.
 */
define([
    'lib/backbone',
    'models/product',
    'views/productDetails',
    'views/editProduct'
], function (Backbone, Product, ProductDetails, EditProduct) {
    return Backbone.Router.extend({
        routes: {
            'home': 'index',
            'product/:id': 'showProduct',
            'edit/:id': 'editProduct'
        },

        initialize: function () {

        },
        index: function (id) {
            $(".content").show();
            $(".js-product-details").html('');
        },
        showProduct: function (id) {
            var productItem = new Product();
            productItem.fetch({url:'products/'+id}).success(function () {
                var detailsView = new ProductDetails({model: productItem});
                $(".content").hide();
                $(".js-product-details").html(detailsView.render().el);
            });

        },
        editProduct: function (id) {
            var productItem = new Product()
            productItem.fetch({url:'products/'+id}).success(function () {

                var editView = new EditProduct({model: productItem});
                $(".content, .js-sort").hide();
                $(".js-product-details").html(editView.render().el);
            });

        }
    });
});