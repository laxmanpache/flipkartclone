


import mongoose from "mongoose";
const Connection=async(uname ,pass)=>{
    // console.log(uname)
    const URL=`mongodb+srv://${uname}:${pass}@cluster0.jhgwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
 
    try{
        await mongoose.connect(URL,{})
        console.log("connection sucessfully");
    }
    catch(e){
        console.log(e);
    }
     
}
export default Connection;