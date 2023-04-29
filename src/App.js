import Home from './Home';
import MyCartPage from './MyCartPage';
import {Routes , Route,NavLink} from 'react-router-dom';
import './App.css';


function App() {

 

  return (
    <div >
    <nav style={{backgroundColor:"black",height: "40px", textAlign:"center",padding:"20px"}}>
    <NavLink style={{ alignItems : "left",color : "white",marginLeft:"20px"}}to ='mycartpage' >Shopping Cart</NavLink>
    <NavLink style={{backgroundColor : "black",color : "white", marginLeft:"1150px" }} to = ''>Home </NavLink> 
    <NavLink style={{backgroundColor : "black",color : "white",marginLeft:"50px"}} to = 'mycartpage'> My Cart Page </NavLink>
    </nav>
     <Routes >
      <Route path='/' element = { <Home  /> } ></Route>
      <Route path = "/mycartpage" element = { <MyCartPage />} ></Route>
     </Routes>
 

    </div>
  );
}

export default App;
