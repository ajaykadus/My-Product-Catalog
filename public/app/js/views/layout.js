
define(
    ["lib/backbone",
        "views/productList",
        "views/addProduct",
        "text!templates/layout.html"
    ], function (Backbone, ProductListView, AddProduct, LayoutTmpl) {
        var ProductCatalog = Backbone.View.extend({
            el: 'body',
            events: {
                "click .js-add-product": "addProduct",
                "click .js-sort": "sortProducts"
            },
            initialize: function (options) {
                this.collection = options.collection;
                this.productList = new ProductListView({collection: this.collection});
                this.render();
            },
            sortProducts: function() {
                this.collection.sort();
                this.$('.js-product-list').html(this.productList.render().el);
            },
            addProduct: function (e) {
                e.preventDefault();
                var addView = new AddProduct({collection: this.collection});
                this.$(".js-add-product").hide();
                this.$(".js-product-form").append(addView.render().el);
            },
            render: function () {
                var that = this;
                this.$el.append(_.template(LayoutTmpl));
                this.$('.js-product-list').append(this.productList.render().el)
            }
        });
        return ProductCatalog;
    });
