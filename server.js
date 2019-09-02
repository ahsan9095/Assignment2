const express=require("express");
const app=express();
const mongoose = require('mongoose');
const bodyparser=require("body-parser");
require("./mongo");
require("./model/post");
require("./model/leader");
require("./model/promotion");


app.use(bodyparser.json())

app.use("/post",require("./routes/posts"))

app.use("/leader",require("./routes/leaders"))

app.use("/promotion",require("./routes/promotions"))


app.listen(8082, function () {
   
    console.log("http://localhost:8082/")
  }); 

  