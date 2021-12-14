import axios from 'axios'
const url="http://localhost:8080"

export const authenticateSignup= async(user)=>{
    try{
        return await axios.post(`${url}/signup`,user)
    }
    catch(e){
        console.log("error while calling signup api"+e);
    }
    
}


export const authenticatelogin = async(user)=>{
    try{
       return await axios.post(`${url}/login`,user)
    }
    catch(e){
        console.log("error occured at login time")
    }
}

export const payUsingPaytm=async(data)=>{
    try{
        console.log("Hi")
  let responce= await axios.post(`${url}/payment`,data)
  return responce.data;
    }catch(e){
        console.log('error while calling paytm api', e)
    }
}


// export  const payUsingPaytm = async (data) => {
//     try {
//         console.log('payment api');
//         let response = await axios.post(`${url}/payment`, data);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.log('error', error);
//     }
// }