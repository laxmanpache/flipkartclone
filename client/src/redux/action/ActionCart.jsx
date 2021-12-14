import React from 'react'
import axios from 'axios'
import * as actionType from '../consence/CartConstant'

const url='http://localhost:8080'
const ActionCart = (id) =>async(dispatch)=> {

    try{

     const {data}=  await axios.get(`${url}/product/${id}`)

   dispatch({type:actionType.ADD_TO_CART,payload:data})
    }catch(e){
       console.log('error occure',e.message)
    }
  
}


export const  RemoveItemFromcart=(id)=> (dispatch)=>{

dispatch({type:actionType.REMOVE_FROM_CART, payload:id})


} 

export default ActionCart

