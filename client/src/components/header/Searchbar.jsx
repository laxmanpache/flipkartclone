import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

import { useEffect } from 'react';
import {useSelector ,useDispatch} from 'react-redux'
import { products } from '../../consence/data'
import { getProducts as listProduct} from '../../redux/action/productActions';
import { useState } from 'react';
import { ListItem, Typography } from '@material-ui/core';
import { List} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({



    search: {
        borderRadius: 2,
        backgroundColor: "#fff",
        marginLeft: 10,

        display: "flex",
    },
    searchIcon: {
        padding: 5,
        height: '100%',

        color: "blue",
        display: "flex",

    },
    inputRoot: {
        fontSize: 'unset',
        width: "100%"
    },
    inputInput: {
        paddingLeft: 10,

    },
    grow: {
        width: '38%'
    },
    list:{
        marginTop:35,
        position:'absolute',
        color:'#000',
        background:'#FFFFFF'
        
    }



}));





const Searchbar = () => {
    const classes = useStyles();
    const history=useHistory()

    const {products} = useSelector(state => state.getProducts)

    const dispatch = useDispatch()
     useEffect(() => {
        dispatch(listProduct())
     }, [dispatch])
     const [ text, setText ] = useState();
     const [ open, setOpen ] = useState(true)
 
     const getText = (text) => {
         setText(text);
         setOpen(false)
         history.push('/')
        
     }

    return (
        <div className={classes.grow}>

            <div className={classes.search}>

                <InputBase
                    placeholder="Search for product brands and more ..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=>getText(e.target.value)}
                />
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
               
                  
                {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(curele => (
                    <ListItem>
                      <Link 
                        to={`product/${curele.id}`}
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {curele.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
            </div>
           

        </div>
    )
}

export default Searchbar;

