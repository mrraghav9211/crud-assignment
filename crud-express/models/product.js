const mongoose = require("mongoose");

const productScema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
      type: String,
    },
    completed: {
      type: Boolean,
    } 
});

productScema.set("timestamps",true)
const productData = mongoose.model("productData", productScema);
module.exports = productData;
