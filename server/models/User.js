import {Schema,model} from "mongoose";


const userSchema = new Schema({
    fullName:{
   type : String,
   required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    dob:{
        type:Date,
        required:true

    },
},
{
    timestamps:true
})

const User = model("User",userSchema);

export default User;