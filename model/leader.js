const mongoose=require("mongoose");

const leaderschema=mongoose.Schema({

Name:{

    type:String,
    require:true

},

Age:{
type: Number,
require:true

},

city:{
type: String,
require:true

}



})


module.exports = mongoose.model("leader",leaderschema);