import {applyMiddleware, combineReducers, createStore} from 'redux'

import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProductsReducer ,getProductDetailsReducer} from './reducer/productReducer'
import CartReducer from './reducer/CartReducer'
const reducer=combineReducers({
  getProducts:getProductsReducer,
  getProductDetails:getProductDetailsReducer,
  cart:CartReducer,
})

const middleware=[thunk]

const Store =createStore( 
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default Store;