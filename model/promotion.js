const mongoose=require("mongoose");

const promotionschema=mongoose.Schema({

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

},

religion:{

type: String,
require:true

}



})


module.exports = mongoose.model("promotion",promotionschema);