import React,{useEffect} from 'react'
import { fetchData1 } from './Actions1';

import {useSelector, useDispatch} from 'react-redux'; 

let item_style = {
    border:"1px solid black",
    backgroundColor: "aquamarine",
    margin : "10px",
    padding : "20px",
    display : "block" ,
   
   }  

function Home() {

    const loading = useSelector((state)=>state.data.loading);
    const data1 = useSelector((state)=>state.data.data);
    const error = useSelector((state)=>state.data.error);
    
    const dispatch =useDispatch();

    
  
    useEffect(() => {
     dispatch(fetchData1())
    }, [dispatch])
    
    if (loading) {
      return <h1> Loading.....</h1>
    }
    if (error) {
      return <h1> Error </h1>
    }
  
   
  return (
    <div>
     <h1 style={{textAlign:"center"}}>All items</h1>
      {
        data1.map((products)=> <div key={products.id} style={item_style} >
           <h2> {products.title}  </h2>
           <p> {products.thumbnail} </p>
           <p>{products.price}</p>
           <button > Add to cart </button>
        </div>)
      }
    
    </div>
  )
}

export default Home