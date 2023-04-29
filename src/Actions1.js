import { FETCH_DATA1_REQUEST,FETCH_DATA1_SUCCESS,FETCH_DATA1_ERROR} from "./ActionType1";
import axios from 'axios';


// based on initial state -actioncreators are created

export const fetchData1Request= () =>  ( {
    type : FETCH_DATA1_REQUEST
})
export const fetchData1Success = (data1) => ({
    type : FETCH_DATA1_SUCCESS,
    payload : data1
})
export const fetchData1Error = (error) => ({
    type : FETCH_DATA1_ERROR,
    payload : error
})
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