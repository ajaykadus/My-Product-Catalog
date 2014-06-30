var home = require('../controllers/home'),
    products = require('../controllers/products');

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/products', products.index);
    app.get('/products/:id', products.getById);
    app.post('/products', products.add);
    app.put('/products/:id', products.update);
};
