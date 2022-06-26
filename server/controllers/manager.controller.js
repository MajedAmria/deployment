const {ProductManager}  = require('../models/manager.model');

module.exports.findAll = (request, response) => {
    ProductManager.find()
    .then(allProducts => response.json({allProducts}))
   .catch(err=> response.json({Masseges:"Erorr",error:err}));
}
module.exports.createManager = (request, response) => {
    const { title, price,description } = request.body;
    ProductManager.create({title:title,price:price,description:description})
        .then(mng => response.json(mng))
        .catch(err => response.json({err:err}));
}
module.exports.findProduct = (request,response) =>{
    ProductManager.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}
module.exports.updateProduct = (request, response) => {
    ProductManager.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    ProductManager.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}