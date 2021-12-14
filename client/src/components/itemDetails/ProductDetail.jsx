import React from 'react'

import {useSelector ,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getProductDetails } from '../../redux/action/productActions'
import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { Theme,Grid } from '@material-ui/core'

//component import
import ActionItem from './ActionItem'

const useStyle=makeStyles(theme=>({
    container:{
        marginTop:55,
        backgroundColor:"#f2f2f2",
        
    },
    component:{
        // margin:'0 80px',
        background:'#ffff',
        display:'flex',
        [theme.breakpoints.down('md')]: {
            margin:0,
        }
       
    },
    rightContainer:{
        marginTop:'55px',
        '& > *':{
            marginTop:10,
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft:50
        }
    },
    smallText:{
        fontSize:14,
        verticalAlign:'baseline',
        '& > *':{
            fontSize:14,
            marginTop:10
        }
    },
    gryTextcolor:{
        color:'#878787'
    },
    price:{
     fontSize:28,
     fontWeight:'100%'
    },
    badge:{
        fontSize:10,
        color:'#388E3C',
        marginRight:10
    }
}))
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const ProductDetail = ({match}) => {

    const classes=useStyle();

    const date=new Date(new Date().getTime()+(5*24*60*60*1000) )

    const {product}=useSelector(state => state.getProductDetails)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
        
    }, [dispatch])
    return (
       <>
       <Box className={classes.container}>
       {  product && Object.keys(product).length &&
            <Grid container lg={12} md={12} sm={12} xs={12} className={classes.component}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                 <ActionItem product={product}/>
                </Grid>
                <Grid lg={8} md={8} sm={12} xs={12} className={classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText , classes.gryTextcolor)}>
                    8 rating & 1 Review
                    <span><img src={fassured} style={{width:'60px' , marginLeft:'10px'}}/></span>
                    </Typography>
                    <Typography>
                      <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;
                      <span className={clsx(classes.smallText , classes.gryTextcolor)}><strike>₹{product.price.mrp}</strike></span>   &nbsp;&nbsp;
                      <span style={{color:'#388E3C'}}>{product.price.discount} off</span>
                    </Typography>
                    <Typography style={{fontWeight:600, marginBottom:10}}>Avaliable Offers</Typography>
                    <Box className={classes.smallText}>
                       <Typography> <span className={classes.badge}><LocalOfferIcon/></span>  Bank Offer10% off on ICICI Bank Cards, up to ₹300. On orders of ₹1750 and aboveT&C </Typography>

                       <Typography> <span className={classes.badge}><LocalOfferIcon/></span>  Bank Offer10% Instant Discount on RBL Bank Credit and Debit CardsT&C</Typography>

                       <Typography> <span className={classes.badge}><LocalOfferIcon/></span>  Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C </Typography>

                       <Typography> <span className={classes.badge}><LocalOfferIcon/></span>  Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and MobikwikT&C</Typography>
                    </Box>
                    <Table>
                        <TableBody>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.gryTextcolor}>Delivery</TableCell>
                                <TableCell>{date.toDateString()} |₹40 </TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.gryTextcolor}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.gryTextcolor}>Seller</TableCell>
                                <TableCell className={classes.smallText}>
                                    <span style={{color:"blue"}}>NewLaxma</span>
                                    <Typography>GST Invoice avaliable</Typography>
                                    <Typography>14 Days return policy</Typography>
                                    <Typography>View More sellers starting from ₹300 </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell colSpan={2}>
                                    <img src={sellerURL} style={{width:"340px"}}/>
                                </TableCell>
                                
                            </TableRow>
                            <TableRow className={classes.smallText}>
                               <TableCell className={classes.gryTextcolor}>Description</TableCell>
                               <TableCell>{product.description}</TableCell>
                                
                            </TableRow>
                        </TableBody>
                    </Table>

                </Grid>
            </Grid>
       }
        </Box>
       </>
    )
}

export default ProductDetail
