import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import {useDispatch} from 'react-redux'
import GroupButton from './GroupButton'


const useStyle=makeStyles({
    container:{
       display:'flex',
       borderRadius:0,
       borderTop:"1px solid #f0f0f0"
    },
    leftComponent:{
      margin:20,
      
    },
    RightComponent:{
        margin:20,
    },
    smallText:{
        fontSize:14,

    },
    grayTextcolor:{
        color:"#878787"
    },
    price:{
        fontSize:18,
        fontWeight:600
    },
    image:{
        width:110,
        height:110
    },
    remove:{
        marginTop:10,
        fontSize:16
    }
})

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const CartItem = ({item , removeItemfromCart}) => {

    const classes=useStyle()
    const dispatch = useDispatch()
    return (
        <>
       <Card className={classes.container}>
           <Box className={classes.leftComponent}>
                 <img src={item.url} className={classes.image}/>
                 <GroupButton/>
           </Box>
           <Box className={classes.RightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.grayTextcolor)} style={{marginTop:10}}>Seller:NewLaxman
                <span><img src={fassured} style={{width:50 , marginLeft:10}}/> </span>
                </Typography>
                <Typography style={{margin:"20px 0"}}>
                    <span className={classes.price}> ₹{item.price.cost}</span> &nbsp;&nbsp;
                    <span className={classes.grayTextcolor}> <strike>₹{item.price.mrp}</strike></span>  &nbsp;&nbsp;
                    <span style={{color:'green'}}>{item.price.discount} off</span> &nbsp;&nbsp;
                  
                </Typography>
                <Button onClick={()=>{removeItemfromCart(item.id)}} className={classes.remove}>Remove</Button>
           </Box>
       </Card>
        </>
    )
}

export default CartItem
