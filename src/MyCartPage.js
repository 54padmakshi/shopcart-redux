import React from 'react'


function MyCartPage() {
  return (
    <div>
     <h1 style={{textAlign:"center"}}> My Cart </h1>

      <div style={{display:"flex",flexDirection : "row"}}>

           <div style={{width:"70%",marginLeft:"20px"}}>
             <h1>Products</h1>
             <p></p>
           <button> Remove from Cart </button>
           </div>   
           <div style={{textAlign : "center",width : "30%" , border:"1px solid black",backgroundColor:"black",color:"white",marginRight:"20px"}}>
               <h1>Checkout List</h1> 
            </div>
        
         </div>
    
    
    </div>
  )
}

export default MyCartPage