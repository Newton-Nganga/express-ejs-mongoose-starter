const mongoose =require('mongoose')
const username = "express-ejs-mongoose";
const password = "mIBUO32k0cE85aRr";
const cluster = "cluster0.z6gvzwj";
const dbname = "express-ejs-mongoose";


 const connection =async() => { 
    await mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    // {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // }
  )
  .then(()=>{
    console.log(`==== MongoDB Connected sucessfully ====`);
  })
  .catch(err=>console.log(err))
  
 }


module.exports = connection;
