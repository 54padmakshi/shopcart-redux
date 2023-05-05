//import { FETCH_DATA1_REQUEST,FETCH_DATA1_SUCCESS,FETCH_DATA1_ERROR,ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from "./ActionType1";//this or
import * as actionTypes from './ActionType1' ; // or this
import axios from 'axios';


// based on initial state -actioncreators are created

export const fetchData1Request= () =>  ( {
    type :actionTypes.FETCH_DATA1_REQUEST
})
export const fetchData1Success = (data1) => ({
    type : actionTypes.FETCH_DATA1_SUCCESS,
    payload : data1
})
export const fetchData1Error = (error) => ({
    type : actionTypes.FETCH_DATA1_ERROR,
    payload : error
})

export const addToCart = (data1)=>({
    type: actionTypes.ADD_TO_CART ,
    payload : data1
})

export const removeFromCart = (data1Id)=>({
    
   type : actionTypes.REMOVE_FROM_CART,
   payload : data1Id
})

export const clearCart = () =>({
    type : actionTypes.CLEAR_CART,

} )

//call api

export const fetchData1 = ()=>async (dispatch) => {
     dispatch(fetchData1Request)
    try{
        const response  = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        dispatch(fetchData1Success(response.data.products));
    }
    catch(error) { 
        dispatch(fetchData1Error(error.message));
    }
}