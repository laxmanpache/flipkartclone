import express  from "express";
import dotenv from 'dotenv'

import Connection from "./database/db.js";
import Default from "./Default.js";
import bodyParser from "body-parser";

import Routes  from './routes/Routes.js'
import { v4 as uuid } from 'uuid';  // for givinng unique id
// import { urlencoded } from "body-parser";
import cors from 'cors'
const app=express();


dotenv.config();
const PORT=process.env.PORT;
//DBconnetion
const uname=process.env.UName;
const pass=process.env.Password;
Connection(uname ,pass);
//Loginapi
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Routes)

app.listen(PORT,()=>{ 
    console.log(`Server started on port ${PORT}`);
})

// data to database

Default();


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8080/callback'
paytmParams['EMAIL'] = 'pachelaxman22@gmail.com'
paytmParams['MOBILE_NO'] = '9075873087'