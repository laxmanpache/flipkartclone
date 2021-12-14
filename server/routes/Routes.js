import express from "express";

// import userSignup from '../controller/Usercontroller.js'
import { userSignup } from "../controller/Usercontroller.js";
import LoginUser from '../controller/Usercontroller.js'
import { getProducts ,getProductByid} from "../controller/ProductController.js";
import { addPaymentGateway,paymentResponse  } from "../controller/payment-controller.js";

const router=express.Router();

router.use('/signup',userSignup)
router.use('/login',LoginUser);
router.get('/products',getProducts); 
router.get('/product/:id',getProductByid)
// router.post('/payment',paymentGateWay);
// router.post('/callback',paymentResponce);
router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router; 