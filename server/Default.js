import { products } from "./constant/product.js";
import product from "./module/ProductSchema.js";
const Default =async()=>{
try{
    await product.deleteMany({})
    await product.insertMany(products)
    console.log("Data inserted sucessfully");
}catch(e){
    console.log("error occure "+ e);
}
}

export default Default;