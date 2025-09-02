import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        unique : true,
        required : true,
        match :[
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please use a valid email address",
      ],
    },

    password : {
        type : String,
        required : true,
        minlength : 8
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    },

},{timestamps : true});

//Encrypt password before saving

userSchema.pre("save" , async function(next) {

    if(!this.isModified("password")) {
        return next();
    }

    const salt =  await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;


