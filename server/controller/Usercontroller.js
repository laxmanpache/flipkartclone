 
 import User from '../module/userSchema.js'
 export const userSignup= async(req,res)=>{
   try{
       const exist= await User.findOne({email:req.body.email})
        if(exist)
        {
            return res.status(401).json("user already registered")
        }
       const user = req.body;
       const newuser=new User(user);
       newuser.save();
       res.status(201).json("you registed sucessfully")
   }
   catch(e){
       console.log("error"+e)
   }
}
 const LoginUser = async(req , res)=>{
   

    try{
       
        const exist= await User.findOne({email:req.body.email, password:req.body.password})
        if(exist)
        {
        return res.status(201).json(`user ${req.body.email} login sucessfully`)
        }
        else{
            return res.status(401).json("user is not registered")
        }
    }
    catch(e){
        console.log('error occurred',e)
    }

}
export default LoginUser

