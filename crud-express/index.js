const express = require('express');
const app = express();
const PORT = 5000;
const connDB = require('./config/conn.js')
const productRouter = require('./routes/productRouter.js')

connDB();
app.use(express.json());
app.get('/',(req, res)=>{
    res.status(201).send('hello world');
});
app.use('/product',productRouter)
app.listen(PORT,()=>console.log(`Server started at http://localhost:${PORT}`))