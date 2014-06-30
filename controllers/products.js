var models = require('../app/models')

module.exports = {
    index: function(req, res) {
        models.Product.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Product.findById(req.params.id, function(err, product) {
            if (err) {
                res.json({error: 'Product not found.'});
            } else {
                res.json(product);
            }
        });
    },
    add: function(req, res) {
        var newProduct = new models.Product(req.body);
        newProduct.save(function(err, product) {
            if (err) {
                res.json({error: 'Error adding product.'});
            } else {
                res.json(product);
            }
        });
    },
    update: function(req, res) {
         models.Product.update({ _id: req.body.id }, req.body, function(err, updated) {
             if (err) {
                 res.json({error: 'Product not found.'});
             } else {
                 res.json(updated);
             }
         })
    }
};
