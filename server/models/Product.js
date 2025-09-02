import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        // required : true,
        trim : true 
    },
   
    description : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
        default : 0.0
    },
    image : {
        type : String,
        required : true
    },
    category :{
        type :  String,
        // required : true,
    },
    brand : {
        type : String
    },
    stock : {
        type : Number,
        required : true,
        default : 0 
    },
    rating : {
        type : Number,
        required : true,
        default : 0
    },
    numReviews : {
        type : Number,
        required : true,
        default : 0
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        // required : true,
        ref : "User"
    }

},{timestamps : true});

const Product = mongoose.model("Product", productSchema);
export default Product;