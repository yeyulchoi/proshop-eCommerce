import mongoose from "mongoose";
import { timestamp } from "rxjs";

const reviewSchema =  mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectID,
        required:true,
        ref:"User"
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    }
},
{
    timestamp:true,
}
)


const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectID,
        required:true,
        ref:"User"
    }
    ,
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required: true
    },
    brand:{
        type: String,
        required:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    review:[reviewSchema],
    rating:{
        type: Number,
        default:0
    },
    numReviews:{
        type: Number,
        required:true,
        default:0
    },
    price:{
        type: Number,
        required:true,
        default:0
    },
    countInStock:{
        type: Number,
        required:true,
        default:0
    }



},
{
    timestamps:true
})

const Product = mongoose.model("Product", productSchema)


export default Product



