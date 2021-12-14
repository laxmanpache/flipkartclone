import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useState } from 'react'
import { Box, Button, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core'

import { authenticateSignup , authenticatelogin} from '../../services/Api'
import validator from 'validator'
const useStyle=makeStyles({

    component:{
        height:'80vh',
        width:'100vh'
    },
    image:{
      backgroundImage  :`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
      height:'80vh',
      backgroundRepeat:'no-repeat',
      background:'#2874f0',
      width:'40%',
      padding:"45px  35px",
     backgroundPosition:"center 80%",
     '& > *':{
      color:"#ffffff",
      fontWeight:600
     }
     
    },
    login:{
      padding:"45px 35px",
      display:'flex',
      flex:1,
      flexDirection:"column",
      '& > *':{
          marginTop:10
      }
    },
    termcondition:{
        fontSize:10,
        color:'#878787'
    },
    loginbtn:{
     textTransform:'none',
     background:'#fb6418',
     color:"#ffffff",
     height:48,
     borderRadius:2
    },
    reqotp:{
        textTransform:'none',
        background:'#ffffff',
        color:"#2874f0",
        height:48,
        borderRadius:2,
        boxShadow:'0 2px 4px 0 rgb(0 0 0 /20%)'
    },
    createaccount:{
        textAlign:'center',
        marginTop:'auto',
        fontSize:14,
        color:'#2874f0',
        fontWeight:600,
        cursor:'pointer'
    },
    errormsg: {
        color:'red',
        fontSize:14,
        marginTop:0,
        fontWeight:600
    }

})

const Login = ({open , setopen , setaccount}) => {
    
 
    const initialdata={
        login:{
             view:'login',
             heading:'Login',
             subheading:'Get access to your Orders, Wishlist and Recommendations'
        },
        signup:{
            view:'signup',
            heading:"Looks like youre new here!",
            subheading:'Sign up with your mobile number to get started'

        }
    }
    const signupintitalvalue={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        phone:''
    }
  
    const [useraccount, setuseraccount] = useState(initialdata.login)
     
    ///error masg showing
    const [error, seterror] = useState(false)
    const [errorSignin, seterrorSignin] = useState(false)


    const classes=useStyle();
    const handleClose=()=>{
        setopen(false)
        seterror(false);
        seterrorSignin(false)
        setuseraccount(initialdata.login)
        
    }
   
    const [signup, setsignup] = useState(signupintitalvalue)
    const toggleaccoutn=()=>{
        setuseraccount(initialdata.signup)

    }
    const reverstoggle=()=>{
        setuseraccount(initialdata.login)
    }

    const signUpUser= async()=>{
     const responce=  await authenticateSignup(signup)
     console.log(responce)
     if(!responce){
        seterrorSignin(true);
        return
     };
     
     handleClose();
    
     setaccount(signup.email)
    
    }

    const onInputChange=(e)=>{
        setsignup({...signup,[e.target.name]:e.target.value})
        // console.log(signup)
    }
    const [emailError, setEmailError] = useState('')

    ///login

    const logininitialvalue={
        email:'',
        password:''
    }
    const [login, setlogin] = useState(logininitialvalue)

    const onloginchange=(e)=>{
        setlogin({...login,[e.target.name]:e.target.value})
    }
    const loginUpUser=async()=>{
        console.log("processing")
       const responce=await authenticatelogin(login)
       console.log(responce)
       if(!responce){
        seterror(true)
        return
       };
       
       handleClose();
       setaccount(login.email)
    }



    const validateEmail = (e) => {
        var email = e.target.value
           console.log(email)
        if (validator.isEmail(email)) {
            onInputChange(e);
        //   console.log("inside if")
        setEmailError('')
        } else {
          
            setEmailError('Enter valid Email!')
        }
      }
    
    return (
       <>
       <Dialog open={open} onClose={handleClose}>
           <DialogContent className={classes.component}>
                 <Box display="flex">
                      <Box className={classes.image}>
                         <Typography variant="h5">{useraccount.heading}</Typography>
                         <Typography style={{marginTop:10}}>{useraccount.subheading}</Typography>
                      </Box>
                      {
                         
                        useraccount.view==='login'?
                                <Box className={classes.login}>
                                    <TextField onChange={(e)=>{onloginchange(e)}}  name="email" label="Enter Email/Mobile number"/>
                                    <TextField onChange={(e)=>{onloginchange(e)}} name="password" label="Enter password" />
                                    {error && <Typography className={classes.errormsg}> Enter correct username or password</Typography>}
                                    <Typography className={classes.termcondition}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                    <Button variant="contained" onClick={()=>{loginUpUser()}} className={classes.loginbtn}>Login</Button>
                                    <Typography style={{textAlign:'center'}}>OR</Typography>
                                    <Button className={classes.reqotp}  variant="containeds">Request OTP</Button>
                                    <Typography onClick={()=>toggleaccoutn()} className={classes.createaccount}>New to Flipkart? Create an account</Typography>
                                </Box>
                               :
                             <Box className={classes.login}>
                                <TextField onChange={(e)=>{onInputChange(e)}} type="text" name="firstname" label="Enter first name" required/>
                                <TextField onChange={(e)=>{onInputChange(e)}} type="text" name="lastname" label="Enter Lastname" required/>
                               
                                <TextField  onChange={(e) => validateEmail(e)} type="email" name="email" label="Enter Email" required />
                                <span style={{ fontWeight: 'bold',color: 'red',}}>{emailError}</span>
                                <TextField onChange={(e)=>{onInputChange(e)}} type="number" name="phone" label="Enter phone Number"  required/>
                                <TextField onChange={(e)=>{onInputChange(e)}} type="text" name="password" label="Enter password" required />

                                {errorSignin && <Typography className={classes.errormsg}> this email already registred..</Typography>}
                                <Button variant="contained" onClick={()=>{signUpUser()}}   className={classes.loginbtn}>Sign Up</Button>

                                <Typography onClick={()=>reverstoggle()} className={classes.createaccount} >Exesting user ? Login </Typography>
                                
                            </Box>
                         
                      }
                 </Box>
           </DialogContent>
       </Dialog>
       </>
    )
}

export default Login
