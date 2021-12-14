import { Typography } from '@material-ui/core'
import { Menu , MenuItem} from '@material-ui/core'
import { useState } from 'react'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom'

const useStyle=makeStyles({
    menubtn:{
       marginTop:40
    },
    logout:{
        marginLeft:20,
        fontSize:14
    }
})
const Profile = ({ account, setaccount }) => {
    const classes= useStyle();
    const [open, setopen] = useState(false)
    const handleClose=()=>{

        setopen(false)
    }


    const logout=()=>{
        setaccount('')
    }

const handleClick=(event)=>{
     setopen(event.currentTarget)
}
    return (
        <>
        <Typography onClick={handleClick} style={{ marginTop: 4 , cursor:'pointer'}}>{account}</Typography>
            <Menu
                
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.menubtn}
            >
                
                <MenuItem onClick={()=>{handleClose();logout();}} > 
                <PowerSettingsNewIcon fontSize="small" color="primary"/>
                <Typography className={classes.logout}> Logout</Typography></MenuItem>
            </Menu>
        </>
    )
}

export default Profile
