import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import React from 'react'
import clsx from 'clsx'
import addToCart from '../../redux/action/ActionCart'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router';
import { payUsingPaytm } from '../../services/Api';
import { post } from '../../utils/paytm';

const useStyle=makeStyles(theme=>({
    leftContainer:{
        marginTop:25,
        padding:"30px 0 0 50px",
        [theme.breakpoints.down('md')]:{
            padding:'20px 0 0 30px'
        }
    },
    image:{
        padding:"15px 20px ",
        width:360,
        border:"1px solid #f0f0f0",
        width:"90%"
    },
    button:{
        width:"46%",
        marginRight:10,
        borderRadius:2,
        [theme.breakpoints.down('md')]:{
           width:'40%',
           marginLeft:10
        }

    },
    addToCart:{
        background:"#ff9f00",
        color:"#fff"
    },
    buyNow:{
       background:"#fb641b",
       color:"#ffff"
    }
}))



const ActionItem = ({product}) => {
    const classes=useStyle();
   const dispatch = useDispatch()
   const history=useHistory()
    const addItemToCart=()=>{
        console.log("hi")
      dispatch(addToCart(product.id))
      history.push('/cart')
    }
    // const buyNow=async()=>{
    //     console.log("hi")
    //   let responce =  await payUsingPaytm({amount:500 , email:"pachelaxman22@gmail.com"})
    //   let information={
    //      action:"https://securegw-stage.paytm.in/order/process",
    //      params:responce

    //   }
    //   console.log(information)
    //   post(information)
    // }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'pachelaxman22@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
    return (
        <>
         <Box className={classes.leftContainer}>
             <img src={product.detailUrl} className={classes.image}/>,<br/>
             <Button variant="contained" onClick={()=>{addItemToCart()}} className={clsx(classes.button , classes.addToCart)}><ShoppingCartIcon/>Add to cart</Button>
             <Button  onClick={()=>buyNow()} variant="contained" className={clsx(classes.button, classes.buyNow)}><FlashOnIcon/>Buy Now</Button>
         </Box>
        </>
    )
}

export default ActionItem
