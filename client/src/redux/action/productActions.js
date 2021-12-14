
import axios from "axios"
import * as action from '../consence/Productconstant'
const url='http://localhost:8080'
export const getProducts=()=>async(dispatch)=>{
    try{
  const responce= await axios.get(`${url}/products`)
  dispatch({type:action.GET_PRODUCT_SUCESS, payload:responce.data})
  console.log(responce)
    }catch(error){
        dispatch({type:action.GET_PRODUCT_FAIL, payload:error.responce})
    }

}


export const getProductDetails=(id)=>async(dispatch)=>{

    try{
      const responce= await axios.get(`${url}/product/${id}`)
      dispatch({type:action.GET_PRODUCT_DETAIL_SUCESS, payload:responce.data})
    }
    catch(e){
      dispatch({type:action.GET_PRODUCT_DETAIL_FAIL, payload:e})
      console.log("Error at time of featching product details");
    }
}