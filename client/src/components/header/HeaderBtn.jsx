import React, { useContext } from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginDialog from '../login/Login';
import { LoginContext } from '../../contaxt/ContextProvide';
import Profile from './Profile';
import { Theme } from '@material-ui/core';
const useStyle = makeStyles(theme=>({
    login: {
        background: "#ffffff",
        color: "blue",
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        padding: "5px 40px",
        boxShadow: "none",
       
        [theme.breakpoints.down('sm')]:{
            color: "#ffff",
            background: "#2874f0",
           
        }
    },
    wrapper: {
        margin: "0 7% 0 auto",
        display: "flex",
        "& > *": {
            marginRight: 50,
            fontSixe: 12,
            alignItem: 'center',
            textDecoration:"none",
            color:"#fff",
            [theme.breakpoints.down('sm')]:{
                color:'#2874f0',
                display:'flex',
                flexDirection:'column',
                marginTop:10
            }
        },
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }

    },
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }

    }

}))

const HeaderBtn = () => {
      const {account , setaccount}=useContext(LoginContext)
    const classes = useStyle();
    const [open, setopen] = useState(false)
    const openddialog=()=>{
        setopen(true)
    }
    return (

        <>
            <Box className={classes.wrapper}>
                {
                    account ?  <Profile account={account} setaccount={setaccount}/>    :  
                    <Button variant="contained" onClick={()=> openddialog()} className={classes.login} style={{color:"blue"}}>Login</Button>
                }
               
              <Link to="/more">  <Typography style={{ marginTop: 5 }}>More</Typography> </Link>
                <Link to="/cart" className={classes.container}>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    <Typography style={{ marginLeft: 8 }}>cart</Typography> 
                </Link>
            </Box>
            <LoginDialog open={open} setopen={ setopen} setaccount={setaccount}/>
           
        </>
    )
}

export default HeaderBtn
