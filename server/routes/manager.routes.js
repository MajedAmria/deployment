const ManagerController = require('../controllers/manager.controller');
module.exports = function(app){
    
    app.get('/api', ManagerController.findAll);
    app.post('/api/manager', ManagerController.createManager);
    app.get('/api/product/:id',ManagerController.findProduct);
    app.put('/api/product/:id', ManagerController.updateProduct);
    app.delete('/api/product/:id', ManagerController.deleteProduct);
}