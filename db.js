const mongoose=require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
//const mongoURL='mongodb://localhost:27017/hotels';
//const mongoURL='mongodb+srv://amansinghrajput15022004:W9B4LF2t5WKGU7Tv@cluster0.r4spvvb.mongodb.net/';
//const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL;

//Set up MongoDB connetion
mongoose.connect(mongoURL,{
    useNewUrlParser:true,  //mandatory
    useUnifiedTopology:true //mandatory
});
//Get a default connection
const db=mongoose.connection;
//Define event listners for database connection
db.on('connected',()=>{
    console.log('connected to mongoDB server');
});
db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});
//Export the database connection
module.exports=db;


