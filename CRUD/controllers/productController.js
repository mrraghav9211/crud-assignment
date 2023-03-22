// const { json } = require("express");
const Product = require("../model/productModel");

const sendData = async (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  const user = await Product.create({ name, description, price });
  if (user) {
    res.status(201).json({
      name: user.name,
      email: user.description,
      password: user.price,
    });
  } else {
    res.send(400);
    throw new Error("Faild to Create the User");
  }
};

const updateData = async (req, res) => {
  // console.log(req.params.id);
  const updatedData = Product.findOneAndUpdate(
    { _id:req.params.id },
    { $set: { 
      name:req.body.name,
      description:req.body.description,
      price:req.body.price
     }},
  ).then(result =>{
    res.status(200).json({
      updated_product:result
    })
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
};

const deleteData = async (req,res)=>{
  const deletedData = Product.deleteOne({'_id':req.params.id})
  .then(result=>{
    res.status(200).send("Data Has Deleted.")
  }).catch(err=>{
    res.status(500)
    console.log(err)
  })
}
module.exports = { sendData, updateData,deleteData };
