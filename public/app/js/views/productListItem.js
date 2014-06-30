/**
 * Created by ajaykadus on 6/23/14.
 */
define([
    "lib/backbone",
    "text!templates/productItem.html"
], function (Backbone, productItemTmpl) {
    var ItemView = Backbone.View.extend({
        tagName: "li",
        className: "card",
        initialize: function() {
        },
        events: {
        },
        render: function () {
            this.$el.html(_.template(productItemTmpl,{model: this.model})).addClass('item-'+this.model.get('id'));
            return this;
       }

    });
    return ItemView;
});
