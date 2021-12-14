
import * as actionType from '../consence/Productconstant'

export const getProductsReducer =(state={products:[]} , action)=>{
    switch(action.type){
      case actionType.GET_PRODUCT_SUCESS:
           return {products:action.payload}
     
      case actionType.GET_PRODUCT_FAIL:
        return {error:action.payload}
    
      default:
           return state;
    }
}

export const getProductDetailsReducer=(state={ product:{} },action)=>{
   switch(action.type){
     case actionType.GET_PRODUCT_DETAIL_SUCESS:
         return {product:action.payload}
    case actionType.GET_PRODUCT_DETAIL_FAIL:
         return {error:action.payload}
    
    default:
      return state;
   }
}