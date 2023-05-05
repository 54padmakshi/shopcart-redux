import { FETCH_DATA1_REQUEST,FETCH_DATA1_SUCCESS,FETCH_DATA1_ERROR, ADD_TO_CART, REMOVE_FROM_CART } from "./ActionType1";
import {combineReducers} from 'redux';

const initialState ={
    loading : true,
    data :[],
    error : "",
    cartData :[]
}

const data1Reducer = (state= initialState,action ) => {
switch(action.type) {
    case  FETCH_DATA1_REQUEST : return {
        ...state,
         loading :true
           }
    case FETCH_DATA1_SUCCESS : return {
                ...state,
               loading :false,
               data : action.payload
              } 
     case FETCH_DATA1_ERROR : return {
                ...state,
                loading : false,
                error : action.payload
              }  
    case ADD_TO_CART : return {
        ...state,
        cartData: [...state.cartData, action.payload]
    } 
    case REMOVE_FROM_CART : return {...state,
                                    cartData : state.cartData.filter(item => item !== action.payload)
    }
    default : return state                             

}

}
// combine reducer so, import it from redux

const rootReducer =combineReducers({ 
    data : data1Reducer 
    
 })
 export  default rootReducer;