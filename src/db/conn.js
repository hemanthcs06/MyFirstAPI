const mongoose=require("mongoose");

mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection successful");
})
.catch(()=>{
    console.log("connection failed");
});