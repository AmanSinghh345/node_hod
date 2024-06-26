const mongoose=require('mongoose')
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        default:2,
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingrident:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0,
    }
})
//comment added
const MenuItem=mongoose.model('MenuItem',menuItemSchema);
module.exports=MenuItem;