import React,{useEffect} from 'react'
import { fetchData1 } from './Actions1';

import {useSelector, useDispatch} from 'react-redux'; 
import { ADD_TO_CART } from './ActionType1';

let item_style = {
    border:"1px solid black",
    backgroundColor: "aquamarine",
    margin : "10px",
    padding : "20px",
     height : "400px",
     
   }  

function Home() {

    const loading = useSelector((state)=>state.data.loading);
    const data1 = useSelector((state)=>state.data.data);
    const error = useSelector((state)=>state.data.error);
    
    const dispatch =useDispatch();

    const  cartdata1 = useSelector((state) =>state.data.cartdata)
  
    useEffect(() => {
     dispatch(fetchData1())
    }, [dispatch])
    
    if (loading) {
      return <h1> Loading.....</h1>
    }
    if (error) {
      return <h1> Error </h1>
    }
  console.log(cartdata1);
   
  return (
    <div>
     <h1 style={{textAlign:"center"}}>All items</h1>
    <div style={{display : "grid",  gridTemplateColumns: "auto auto auto auto"}}>
      {
          
        data1.map((products)=> <div key={products.id} style={item_style} >
           
           <img  src = {products.thumbnail} alt={products.thumbnail} style={{ width:'280px',  height:"280px",margin:"0 auto"}}/>
           <p> Title : {products.title}  </p>
           <p>Price : {products.price}</p>
           <button onClick={()=>{return dispatch({type: ADD_TO_CART,payload:products})}}> Add to cart </button>
        </div>)
        
      }
      </div>
    </div>
  )
}

export default Home