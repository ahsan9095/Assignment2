const router=require("express").Router();
const mongoose = require('mongoose');
const Post=mongoose.model("Post");


router.get("/",async function(req,res)
{
   const posts=await Post.find({});
   res.send(posts);

})


router.get("/:postid", async function(req,res)
{

    const post=await Post.find({_id:req.params.postid})
res.send(post);

})

router.put("/:postid", async function(req,res)
{

    const post=await Post.findByIdAndUpdate({

        _id:req.params.postid
    },req.body,{
        new:true
    });

res.send(post);

});

router.delete("/:postid", async function(req,res)
{

    const post=await Post.findByIdAndRemove({

        _id:req.params.postid
    })
res.send(post);







});


router.post("/", async function(req,res)
{
  const post=new Post();
  post.title=req.body.title;
  post.content=req.body.content;
  await post.save();
  res.send(post);


 })


 module.exports=router;

