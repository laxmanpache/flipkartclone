import React from 'react'
import { navData } from '../../consence/data'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyle=makeStyles(theme=>({

     container:{
         display:'flex',
         margin:"55px 50px 0 50px",
         justifyContent:"space-between",
         overflowX:"overlay",
         [theme.breakpoints.down('md')]: {
            margin:0
          }
     },
     imgsubheder:{
         textAlign:"center",
         padding:"12px 8px"
     },
     images:{
          width:80
     },
     text:{
         fontSize:14,
         fontWeight:600
     }
}))

const Navebar = () => {
    const classes=useStyle()
    return (
        <>
            <Box className={classes.container}>
                {
                    navData.map((curele,keys)=>(

                     <Box className={classes.imgsubheder} key={keys}>
                      <img src={curele.url} className={classes.images}/>
                      <Typography className={classes.text}>{curele.text}</Typography>
                    </Box>
                    ))
                }
            </Box>
        </>
    )
}

export default Navebar
