const express=require("express");
const app=express();
require("./db//conn");
const menRouter=require("./routers//menrank");
const PORT=process.env.PORT || 3500; 

app.use(express.json());
app.use(menRouter);

app.listen(PORT,()=>{
    console.log(`Listening to port no ${PORT}`);
});