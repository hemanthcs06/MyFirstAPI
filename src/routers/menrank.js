const MenRank=require("../models//mensdata");
const express=require("express");
const router=new express.Router();

router.post("/men100",async (req,res)=>{
    try{
    // const data=new MenRank(req.body);
    // const result=await data.save();
    const result=await MenRank.insertMany(req.body);
    res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
});

router.get("/men100",async(req,res)=>{
    try{
        const data=await MenRank.find().sort({ranking:1});
        res.status(201).send(data);
    }catch(err){
        res.status(400).send(err);
    }
});

router.get("/men100/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await MenRank.findById({_id});
        res.status(201).send(data);
    }catch(err){
        res.status(400).send(err);
    }
});

router.patch("/men100/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await MenRank.findByIdAndUpdate({_id},req.body,{new:true});
        res.status(201).send(data);   
    }catch(err){
        res.status(500).send(err);
    }
});

router.delete("/men100/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await MenRank.findByIdAndDelete({_id});
        res.status(201).send(data);   
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports=router;