import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';


const usestyle=makeStyles(theme=>({
    container:{
         padding:'80px 140px',
         [theme.breakpoints.down('md')]:{
             padding:'10px 10px'
         }
        
    },
    boxempty:{
        marginTop:30,
        width:'80%',
        background:'#fff',
        height:'65vh',
        textAlign:'center',
        paddingTop:'75px',
        '& > *':{
            marginTop:10
        }
    },
    image:{
        width:'14%'
    },
    button1:{
        marginTop:20,
        padding:"12px 70px",
        fontSize:14,
        borderRadius:2
    }
}))

const EmptyCart = () => {

     const history=useHistory()
    const shopnow=()=>{
        history.push('/')
     }
    const classes=usestyle()
    return (
        <div>
            <Box className={classes.container}>
                <Box className={classes.boxempty}>
                <img src={emptycarturl} className={classes.image}/>
                <Typography>Your Cart is empty !</Typography>
                <Typography>Add item to it now</Typography>
                <Button className={classes.button1} variant='contained' color='primary' onClick={()=>{shopnow()}}>Shop Now</Button>
                </Box>
            </Box>
        </div>
    )
}

export default EmptyCart
