/**
 * Created by ajaykadus on 6/23/14.
 */
define([
    "lib/backbone",
    "models/product",
    "text!templates/editDetails.html"
], function (Backbone, Product, editProductTmpl) {
    var ItemView = Backbone.View.extend({
        events: {
            "click .js-update-product": "updateProduct",
            'keypress input': 'processKey'
        },
        processKey: function(e) {
            if(e.which === 13) {// enter key
                this.updateProduct(e);
            }
            else{
                return true;
            }
        },
        updateProduct: function (e) {
            e.preventDefault();
            var data = {};
            $(".js-edit-product-details").find("input").each(function (i, el) {
                data[el.id] = $(el).val();
            });
            this.model.save(data);
//            var updatedProduct = new Product(data);
//            updatedProduct.set('id',this.model.get('id'),{silent: true});
            Backbone.Events.trigger('changed_product', this.model);
            Backbone.history.navigate('home', false);
            $(".content, .js-sort, .js-add-product").show();
            $(".js-product-form").hide();
            $(".js-product-details").html('');
        },
        render: function () {
            this.$el.html(_.template(editProductTmpl, {model: this.model}));
            return this;
        }
    });
    return ItemView;
});
