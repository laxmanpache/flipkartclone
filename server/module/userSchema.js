import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({

    firstname:{
        require:true,
        type:String,
        trim:true,
        min:3,
        max:20
    },
    lastname:{
        require:true,
        type:String,
        trim:true,
        min:3,
        max:20
    },
    email:{
        require:true,
        type:String,
        trim:true,
        unique:true,
        index:true
    },
    password:{
      type:String,
      require:true,

    },
    phonenumber:{
       type:String
    }
})

const user=mongoose.model('user',userSchema)

export default user;