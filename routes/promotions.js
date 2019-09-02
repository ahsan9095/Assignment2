const promotionrouter=require("express").Router();
const mongoose = require('mongoose');
const Promotion=mongoose.model("promotion");


promotionrouter.get("/",async function(req,res)
{
   const promotion=await Promotion.find({});
   res.send(promotion);

})


promotionrouter.get("/:promotionid", async function(req,res)
{

    const promotion=await Promotion.find({_id:req.params.promotionid})
res.send(promotion);

})

promotionrouter.put("/:promotionid", async function(req,res)
{

    const promotion=await Promotion.findByIdAndUpdate({

        _id:req.params.promotionid
    },req.body,{
        new:true
    });

res.send(promotion);

});

promotionrouter.delete("/:promotionid", async function(req,res)
{

    const promotion=await Promotion.findByIdAndRemove({

        _id:req.params.promotionid
    })
res.send(promotion);







});


promotionrouter.post("/", async function(req,res)
{
  const promotion=new Promotion();
  promotion.Name=req.body.Name;
  promotion.Age=req.body.Age;
  promotion.city=req.body.city;
  promotion.religion=req.body.religion;

  await promotion.save();
  res.send(promotion);


 })


 module.exports=promotionrouter;

