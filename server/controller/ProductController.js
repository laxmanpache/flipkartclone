
import product from "../module/ProductSchema.js"
 export const getProducts =async(req,res)=>{
    try{
   const Product1=await product.find({});
   res.json(Product1);
    }
    catch(e){
        console.log('error',e.message)
    }
}

export const getProductByid=async(req,res)=>{
    try{
        const Product=await product.findOne({'id':req.params.id})
        res.json(Product);
    }catch(e){
        console.log('Error',e.message)
    }
}
