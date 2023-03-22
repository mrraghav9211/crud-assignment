const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;