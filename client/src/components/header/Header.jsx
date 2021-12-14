import React from 'react'

import { AppBar, Toolbar, makeStyles, Typography, Box,IconButton, Menu ,Drawer, List, ListItem } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
// components
import Searchbar from './Searchbar'
import HeaderBtn from './HeaderBtn'
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react'

const useStyle = makeStyles(theme=>({
    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 5,
        height: 10
    },
    container: {
        display: "flex"
    },
    component: {
        marginLeft: "12%",
        lineHeight: 0,
        textDecoration:"none",
        color:"#ffffff"

    },
    subheder: {
        fontSize: 10,
        fontStyle: "italic"
    }
    ,
    menuBtn:{
     display:'none',
     [theme.breakpoints.down('sm')]:{
         display:'block'
     }
    },
    list:{
        width:250
    },
    headerbtn:{
        margin: "0 7% 0 auto",
        [theme.breakpoints.down('sm')]:{
            display:'none',
            margin: "0 7% 0 auto",
        }
    }
   
}))

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);
const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    const[Open ,setchange]=useState(false)
    const handleClose=()=>{
        // console.log("Hi")
        console.log(Open)
        setchange(false)
        console.log(Open)
        
    }
    const handleOpen=()=>{
        console.log(Open)
        setchange(true)
    }

    const list=()=>{
      return(   <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem button>
                <HeaderBtn />
                </ListItem>
            </List>
        </Box>)
    }
    return (
        <>
            <AppBar className={classes.header}>
                <ToolBar>
                  <IconButton
                  color="inherit"
                  className={classes.menuBtn}
                  onClick={handleOpen}
                  >
                       <MenuIcon/>
                  </IconButton>
                  <Drawer 
                   open={Open} 
                   anchor={'left'}
                   onClose={handleClose}>
                       { list()}
                 </Drawer>
                    <Link to="/" className={classes.component}>
                        <img src={logoURL} alt="flipcard logo" className={classes.logo} />
                        <Box className={classes.container}>
                            <Typography className={classes.subheder}>Explore <Box component="span" style={{ color: "#ffe500" }}> plus</Box></Typography>
                            <img src={subURL} alt="suburl" className={classes.subURL} />
                        </Box>
                    </Link>
                 
                    <Searchbar />
                   <span className={classes.headerbtn}> <HeaderBtn /></span>
                </ToolBar>
            </AppBar>

        </>
    )
}

export default Header;
