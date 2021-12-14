import React from 'react'
import { useSelector} from 'react-redux'
// import useSelector from 'react'
import { useEffect } from 'react'
import { Box, makeStyles, Typography , Button , Grid} from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import CartItem from './CartItem'
import {useDispatch} from 'react-redux'
import {RemoveItemFromcart} from '../../redux/action/ActionCart'
import EmptyCart from './EmptyCart'
import TotalView from './TotalView'
import { payUsingPaytm } from '../../services/Api';
import { post } from '../../utils/paytm';

const useStyle=makeStyles(theme=>({
    container:{
        // marginTop:'55px',
        padding:"30px 135px",
      display:'flex',
      [theme.breakpoints.down('md')]:{
          padding:'15px 30px'
      }
    },
    Leftcomponent:{
      width:"67%",
      display:'flex',
      flexDirection:'column'

    },
    header:{
        padding:"20px 34px",
        background:"#fff",
        

    },
    RightComponent:{

    },
    placeOrder:{
       background:"#fb641b",
       color:"#fffff",
       borderRadius:2,
       width:250,
       height:50,
       display:'flex',
       marginLeft:'auto'
    },
    Bottom:{
     padding:'16px 20px',
     background:"#ffff",
     borderTop:"1px solid #f0f0f0",
     boxShadow:"0 -2px 10px 0 rgb(0 0 0 /10%)"
    }
}))
const Cart = () => {

    const classes=useStyle();
    const{cartItems} = useSelector(state => state.cart)
    useEffect(() => {
        console.log(cartItems)
    }, [])

  const dispatch = useDispatch()

const removeItemfromCart=(id)=>{
    dispatch(RemoveItemFromcart(id))
}
// let condition;
// if(cartItems.length==='undefined'){
//     condition=false
// }
// else{
//     condition=cartItems.length
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
        <Box style={{background:"#f2f2f2"}} >
           {
               
            cartItems.length ?
               
                 <Grid  container  className={ classes.container}>
                   <Grid item lg={9} md={9} sm={12} xs={12}  className={classes.Leftcomponent}>
                         <Box className={classes.header}>
                            <Typography style={{fontWeight:600 , fontSize:18}}>My Cart({cartItems.length})</Typography>
                         </Box>
                         {
                             cartItems.map(item=>(
                                 <CartItem item={item} removeItemfromCart={removeItemfromCart}/>
                             ))
                         }
                         <Box className={classes.Bottom}>
                         <Button onClick={()=>buyNow()} className={classes.placeOrder} variant='contained'>Place Order</Button>
                         </Box>
                   </Grid>
                   <Grid item lg={3} md={3} sm={12} xs={12} style={{marginTop:'10px'}} >
                   {/* <Box className={classes.RightComponent}> */}
                         <TotalView cartItems={cartItems}/>
                   {/* </Box> */}
                   </Grid> 
                 </Grid>
                 :
                 <EmptyCart/>
                
           }
           </Box>
        </>
    )
}

export default Cart
