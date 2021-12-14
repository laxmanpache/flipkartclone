import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
//componet
import Navebar from './Navebar'
import Banner from './Banner'
import Slider from './Slider'
import Midsection from './Midsection'
import { useEffect } from 'react'


import {useSelector ,useDispatch} from 'react-redux'
import { products } from '../../consence/data'
import { getProducts as listProduct} from '../../redux/action/productActions'
import theme from '../../templates/TemplateProvider'
const useStyle=makeStyles(theme=>({

    container:{
        padding:10,
        backgroundColor:"#f2f2f2"
    },
    leftcontainer:{
        width:'82.6%',
        [theme.breakpoints.down('md')]:{
           width:'100%'
        }
    },
    rightwrapper:{
      background:"#f2f2f2",
      padding:"5px 0 0px 5px",
      margin:"21px 5px 0 5px",
      width:'17%',
      [theme.breakpoints.down('md')]:{
          display:'none'
      }
     
    },

}))
const Home = () => {
    const classes=useStyle()
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const {products} = useSelector(state => state.getProducts)
   const dispatch = useDispatch()
    useEffect(() => {
       dispatch(listProduct())
    }, [dispatch])
    return (
        <>
            <Navebar/>
            <Box className={classes.container}>
            <Banner/>
            </Box>
            <Box style={{display:'flex' }}>
                <Box  className={classes.leftcontainer}>
                   <Slider timer={true} title={"Deal of the day"} products={products}/>
                </Box>
                <Box className={classes.rightwrapper}>
                    <img src={adURL} alt="offer banner" style={{width:200}}/>
                </Box>
            </Box>
            <Midsection/>
            <Slider timer={false} title={"Descount for you"}products={products}/>
            <Slider timer={false} title={"Top Picks on"} products={products}/>  
            <Slider timer={false} title={"Top Deals"} products={products}/> 
           
           
        </>
    )
}

export default Home
