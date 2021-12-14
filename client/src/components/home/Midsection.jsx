import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { ImageURL } from '../../consence/data'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'
const useStyle=makeStyles(theme=>({
  container:{
      display:'flex',
      marginTop:10,
      margin:10,
      justifyContent:'space-between',
 
},
    myimg:{
   
        width:'95%'
    },
    corona:{
        overflowX:"overlay",
        width:"98.5%" ,
         margin:9,
        [theme.breakpoints.down('md')]:{
           
            objectFit:'cover',
            height:'150px',
            width:"95.5%"
        }
    }
}))
const Midsection = () => {
    const classes=useStyle()
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
        <Grid container lg={12} sm={12} md={12} xs={12} className={classes.container}>
            {
              
                ImageURL.map((curele,key)=>(
                    <Grid  item lg={4} md={4} sm={12} xs={12}>
                      <img className={classes.myimg}   src={curele} key={key} alt="images"/>
                    </Grid>
                ))
            }
        </Grid>
        
        <img src={coronaURL} alt="coronaurl" className={classes.corona} style={{  }}/>
        </>
    )
}

export default Midsection
