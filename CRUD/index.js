const express = require('express');
const app = express();
const connDB = require('./db/db');
const productRoute = require('./routes/productRoutes');
const Product = require('./model/productModel');


connDB();
app.use(express.json());


app.get('/product/data', async(req, res) => {
    try {
      const articles = await Product.find({});
      res.status(200).send(articles);
    } catch (error) {
      res.status(404).send(error)
      console.log(error)
    }
});


app.use('/product', productRoute)
// app.get('/user',(req,res)=>{
//   res.send("hello from get side.")
// })
app.listen(5000,()=> console.log(`server listen at http://localhost${5000}`))