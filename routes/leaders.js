const leaderrouter=require("express").Router();
const mongoose = require('mongoose');
const Leader=mongoose.model("leader");


leaderrouter.get("/",async function(req,res)
{
   const leader=await Leader.find({});
   res.send(leader);

})


leaderrouter.get("/:leadertid", async function(req,res)
{

    const leader=await Leader.find({_id:req.params.leaderid})
res.send(leader);

})

leaderrouter.put("/:leaderid", async function(req,res)
{

    const leader=await Leader.findByIdAndUpdate({

        _id:req.params.leaderid
    },req.body,{
        new:true
    });

res.send(leader);

});

leaderrouter.delete("/:leaderid", async function(req,res)
{

    const leader=await Leader.findByIdAndRemove({

        _id:req.params.leaderid
    })
res.send(leader);







});



leaderrouter.post("/", async function(req,res)
{
  const leader=new Leader();
  leader.Name=req.body.Name;
  leader.Age=req.body.Age;
  leader.city=req.body.city;

  await leader.save();
  res.send(leader);


 })

module.exports = leaderrouter;