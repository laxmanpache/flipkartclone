// import { Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../consence/data'
import theme from '../../templates/TemplateProvider'
const useStyle=makeStyles(theme=>({
    images:{
     width:'100%',
     height:280,
      [theme.breakpoints.down('sm')]:{
          objectFit:"cover",
          height:200,
      }
    }
}))
const Banner = () => {
    const classes=useStyle()
    return (
        <>
                <Carousel
                next={ () => {/* Do stuff */} }
                prev={ () => {/* Do other stuff */} }
                autoPlay={true} animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style:{
                        backgroundColor:"#ffffff",
                        color:"#494949",
                        borderRadius:0,
                        margin:0,
                        padding:"25px 10px",
                        fontWeight:700,
                        fontSize:20
                    }
                }}
                >
                  {bannerData.map((curele,keys)=>(
                      <>
                        <img src={curele} className={classes.images} key={keys}/>
                      </>
                  ))}
            </Carousel>
            
        </>
    )
}

export default Banner
