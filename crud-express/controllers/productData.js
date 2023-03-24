const productData = require("../models/product.js");

const CreateTask = async (req, res) => {
  const { title, description, completed, createdAt, updatedAt } = req.body;
  try {
    const data = await productData.create({
      title,
      description,
      completed,
    });
    res.status(201).json({
      title: data.title,
      description: data.description,
      completed: data.completed,
      createdAt: data.createdAt,
    });
  } catch (err) {
    res.status(400);
    console.log(err.message);
  }
};

const getData = async (req, res) => {
  const data = await productData.find({});
  res.status(200).json(data);
};

const getById = async (req, res) => {
  const data = await productData.find({ _id: req.params.id });
  res.status(200).json(data);
};
const updateTask = async (req, res) => {
  try {
    const updatedTask = await productData.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed,
        },
      }
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400);
    console.log(error.message);
  }
};
module.exports = { CreateTask, getData, getById, updateTask };
