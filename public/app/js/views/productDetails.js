/**
 * Created by ajaykadus on 6/23/14.
 */
define([
    "lib/backbone",
    "text!templates/productDetails.html"
], function (Backbone, productItemTmpl) {
    var ItemView = Backbone.View.extend({
        render: function () {
            this.$el.html(_.template(productItemTmpl,{model: this.model}));
            return this;
        }
    });
    return ItemView;
});
