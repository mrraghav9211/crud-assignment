const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        mongoose.set("strictQuery",false)
        mongoose.connect('mongodb+srv://mrraghav9211:l7PWFL3e1esEuaEg@cluster0.dhggdyu.mongodb.net/?retryWrites=true&w=majority')
        console.log("MongoDB Connected:");   
    }catch(err){
        console.log(err.message);
        process.exit();
    }
}
module.exports = connectDB;