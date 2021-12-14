// import PaytmChecksum from '../paytm/PaytmChecksum.js'
// import { paytmMerchantkey , paytmParams } from '../index.js'
// // import { response } from 'express'
// import formidable from 'formidable'
// // import { request } from 'express'
// import https from 'https'

// export const paymentGateWay=async(request,response)=>{
  
  // console.log("hi")
   
  // let paytmchecksum= await PaytmChecksum.generateSignature(paytmParms, paytmMerchantKey)
  // try{
  //    let params={
  //        ...paytmParms,'CHECKSUMHASH':paytmchecksum
  //    }
  //   //  console.log(paytmchecksum)
  //    console.log(params)
  //   responce.json(params)
  // }catch(e){
  //     console.log("erroe",e)
  // }

//   let paytmCheckSum = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantkey);
//     try {
//         let params = {
//             ...paytmParams,
//             'CHECKSUMHASH': paytmCheckSum
//         };
//         response.json(params);
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const paymentResponce=(request,responce)=>{
//    const form=formidable.IncomingForm();
//    let paytmCheckSum=request.body.CHECKSUMHASH;
//    delete request.body.CHECKSUMHASH;
//   let isVerifySIgnature= PaytmChecksum.verifySignature(request.body,'bKMfNxPPf_QdZppa',paytmCheckSum);
//   if(isVerifySIgnature){
//        paytmParms['MID']=request.body.MID;
//        paytmParms['ORDERID']=request.body.ORDER_ID;
//        PaytmChecksum.generateSignature(paytmParms,'bKMfNxPPf_QdZppa').then(function(checksum){
//            paytmParms['CHECKSUMHASH']=checksum;


//            let post_data=JSON.stringify(paytmParms);
//            let option={
//              hostname:'securegw-stage.paytm.in',
//              port:443,
//              path:'/order/status',
//              method:'POST',
//              headers:{
//                'Content-type':'application/json',
//                'Content-Length':post_data.length
//              }
//            };

//            let res=''
//           let post_req=  https.request(option,function(post_res){
//              post_res.on('data',function(chunk){
//                res +=chunk;
//              })

//              post_res.on('end',function(){
//               let result= JSON.parse(res)
//                responce.redirect('http://localhost:3000/');
//             });

//            });

//            post_req.write(post_data);
//            post_req.end()

          


//        })
//   }
//   else {
//     console.log('checksum mismatch')
//   }
// }




  
import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../index.js';
import formidable from 'formidable';
import https from 'https';



export const addPaymentGateway = async (request, response) => {
    let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
    try {
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.json(params);
    } catch (error) {
        console.log(error);
    }
}

export const paymentResponse = (request, response) => {

    const form = new formidable.IncomingForm();
        let paytmCheckSum = request.body.CHECKSUMHASH;
        delete request.body.CHECKSUMHASH;

        var isVerifySignature = paytmchecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa', paytmCheckSum);
        console.log(isVerifySignature);
        if (isVerifySignature) {
            var paytmParams = {};
            paytmParams["MID"] = request.body.MID;
            paytmParams["ORDERID"] = request.body.ORDERID;

            paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function (checksum) {

                paytmParams["CHECKSUMHASH"] = checksum;

                var post_data = JSON.stringify(paytmParams);

                var options = {

                    hostname: 'securegw-stage.paytm.in',
                    port: 443,
                    path: '/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var res = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        res += chunk;
                    });

                    post_res.on('end', function () {
                        let result = JSON.parse(res)
                        response.redirect(`http://localhost:3000/`)
                    });
                });
                post_req.write(post_data);
                post_req.end();
            });
        } else {
            console.log("Checksum Mismatched");
        }
    console.log('//////////////end')
}