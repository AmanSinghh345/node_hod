const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;

//Mjiddleware Function
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );
  next(); //Move on to the nest Phase
};
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to our Hotel");
});
/*
//Post route to add a person
app.post('/person', async (req,res)=>{
 try{
  const data=req.body //Assuming the request body contains the person data

  //Create a new person document using the Mongoose model
  const newPerson=new Person(data);

  //Save the new person to the database
  const response=await newPerson.save();
  console.log('data saved');
  res.status(200).json(response);
} 
catch(err){
  console.log(err);
  res.status(500).json({error:'Internet Server Error'});
}
})


//Get method to get the person
app.get('/person',async(req,res)=>{
  try{
    const data= await Person.find();
    console.log('data fectched');
  res.status(200).json(data);
  }catch(err){
    console.log(err);
  res.status(500).json({error:'Internet Server Error'});

  }
})
*/
/*
//Post method to add a menu item
app.post('/menu',async(req,res)=>{
  try{
    const data=req.body
    const newMenu=new MenuItem(data);
    const response=await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internet Seerver Error'});
  }
})

//Get method to get the menu items
app.get('/menu',async(req,res)=>{
  try{
    const data=await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Intenet Server Error'});
  }
})

//for different work
app.get('/person/:workType',async(req,res)=>{
  try{
  const workType=req.params.workType;
  if(workType=='chef'||workType=='waiter'||workType=='manager'){
   const response=await Person.find({work: workType});
   console.log('response fetched');
   res.status(200).json(response);
  }else{
    res.status(404).json({error:'Invalid work type'});
  }
  }
  catch(err){
console.log(err);
res.status(500).json({error:'Internal Server Error'});
  }
})
 */

//Import Router
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

//use routers
app.use("/person", localAuthMiddleware, personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(PORT, () => {
  console.log("listening to port 3000");
});
