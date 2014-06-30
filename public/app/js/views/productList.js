/**
 * Created by ajaykadus on 6/23/14.
 */
define(
    ["lib/backbone",
        "views/productListItem"
    ], function (Backbone, productListItemView) {
        var ProductListView = Backbone.View.extend({
            tagName: "ul",
            className: "card-content",
            events: {
            },
            initialize: function () {
                this.collection = this.collection || this.options.collection;
                this.listenTo(this.collection, 'add', this.addProduct);
                Backbone.Events.on('changed_product', this.updateProductView, this);
            },
            render: function () {
                var that = this;
                this.$el.empty();
                this.collection.each(function (model) {
                    var productView = new productListItemView({model: model});
                    that.$el.append(productView.render().el);
                });
                return this;
            },
            updateProductView: function (model) {
                var UpdatedProductView = new productListItemView({model: model});
                this.$el.find('.item-' + model.id).replaceWith(UpdatedProductView.render().el);
            },
            addProduct: function (model) {
                var productView = new productListItemView({model: model});
                this.$el.append(productView.render().el);
            }
        });
        return ProductListView;
    });
