const ProductController = require('../controllers/controller.product');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct)
}

