/**
 * Created by ajaykadus on 6/23/14.
 */
define(["lib/backbone",
    "models/product",
    "views/productListItem",
    "text!templates/addProduct.html"
], function (Backbone, Product, productListItemView, addTmpl) {
    var AddProduct = Backbone.View.extend({
        events: {
            "submit #add": "saveProduct",
            'keypress input': 'processKey'
        },
        processKey: function (e) {
            if (e.which === 13) {// enter key
                this.saveProduct(e);
            }
            else {
                return true;
            }
        },
        initialize: function (options) {
            this.collection = options.collection;
        },
        saveProduct: function (e) {
            e.preventDefault();
            var data = {}, that = this;
            $("#add").children("input[type='text']").each(function (i, el) {
                data[el.id] = $(el).val();
            });
            var newProduct = new Product();
            newProduct.save(data, {success: function() {
                that.collection.add(newProduct);
            }});
            $('#add').each(function () {
                this.reset();
            });
            $(".js-add-product").show();
            $(".js-product-form").html('');

        },
        render: function () {
            var that = this;
            this.$el.append(_.template(addTmpl));
            return this;
        }
    });
    return AddProduct;


});