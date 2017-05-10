var mongoose = require('mongoose');
//Defining Schema
var proSchema = mongoose.Schema({

    pId: {
        type: String,
        required: true
    },

    pName: {
        type: String,
        required: true
    },

    pPrice: {
        type: String,
        required: true
    },

    pQuantity: {
        type: String,
        required: true
    }

});

var propackage = module.exports = mongoose.model('ProductCollection', proSchema); //Binding schema 

module.exports.addProduct = function(data, callback) {
    propackage.create(data, callback);
}
module.exports.getProductByField = function(ret, callback) {
    propackage.find({pId:ret}, callback);
}
module.exports.updateProduct = function(id, data, options, callback) {
    var query = {
        pId: id
    };
    var update = {
        pId: data.pId,
        pName: data.pName,
        pPrice: data.pPrice,
        pQuantity: data.pQuantity
    }
    propackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.purchase= function ({id,q,quanity}, data, options, callback) {
    alert('func call')
    if(parseInt(q)<=3 && parseInt(quantity) > parseInt(q) ){
    var query = {
        
        pId: id,
        pQuantity: quantity,
        pQuantity: function(pQuantity,q){
                pQuantity= parseInt(pQuantity)-parseInt(q);
        }
        }
    }
    var update = {
        pId: data.pId,
        pName: data.pName,
        pPrice: data.pPrice,
        pQuantity: data.pQuantity
    }
    
    propackage.findOneAndUpdate(query, update, options, callback);}
module.exports.getDetails = function(callback) {
    propackage.find(callback);
}

