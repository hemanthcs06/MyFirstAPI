const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/100mendb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection successful");
})
.catch(()=>{
    console.log("connection failed");
});