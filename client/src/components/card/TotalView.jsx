import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useState } from 'react'
import React from 'react'
import { useEffect  } from 'react'

const useStyle=makeStyles({

     component:{
            // width:'30%',
            marginLeft:15,
            background:"#ffff"
     },
     header:{
        padding:"16px 23px",
        borderBottom:'1px solid #f0f0f0'
     },
     container:{
        padding:"15px 24px",
        '& > *':{
            marginTop:20,
            fontSize:14 
        }
     },
     grayText:{
         color:'#878787'
     },
     price:{
         float:'right'
     },
     totalAmount:{
          fontSize:18,
          fontWeight:600,
          borderBottom:'1px dashed #f0f0f0',
          padding:"20px 0"
     }
    
        
    
})
const TotalView = ({cartItems}) => {

    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)
    const classes=useStyle();

    useEffect(() => {
       totalAmount();
    }, [cartItems])
    const totalAmount=()=>{
        let price=0 , discount=0;
        cartItems.map((curitem)=>{
            price +=curitem.price.mrp
            discount +=(curitem.price.mrp - curitem.price.cost)
        })
        setprice(price);
        setdiscount(discount)
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                  <Typography className={classes.grayText}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.container} >
            <Typography>Price({cartItems.length} item ) <span className={classes.price}> ₹{price}</span> </Typography>
            <Typography>Discount <span className={classes.price}>- ₹{discount}</span></Typography>
            <Typography>Dilevary charge <span className={classes.price}> ₹40</span> </Typography>
            <Typography className={classes.totalAmount}>Total Amount <span className={classes.price}>{price-discount +40}</span></Typography>
            <Typography style={{color:'green'}}>You will save {discount -40} on this order</Typography>
            </Box>
        </Box>
    )
}

export default TotalView
