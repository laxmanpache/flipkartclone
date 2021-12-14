import React from 'react'
import { Button , ButtonGroup } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'

const useStyle=makeStyles({
container:{
    marginTop:15,
},
Button:{
    borderRadius:"50%"
}
})


const GroupButton = () => {
    const classes=useStyle()
    const [counter, setcounter] = useState(1)
    const handledec=()=>{
        setcounter(counter -1)
    }
    const handleinc=()=>{
        setcounter(counter +1)
    }
    return (
        <>
        <Box style={{marginTop:10}}>      
          <ButtonGroup className={classes.container}>
            <Button className={classes.Button} disabled={counter===1} onClick={()=>handledec()}>-</Button>
            <Button>{counter}</Button>
            <Button className={classes.Button} onClick={()=>handleinc()}>+</Button>
        </ButtonGroup>
        </Box>

        </>
    )
}

export default GroupButton
