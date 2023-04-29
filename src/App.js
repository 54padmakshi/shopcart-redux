import Home from './Home';
import MyCartPage from './MyCartPage';
import {Routes , Route,NavLink} from 'react-router-dom';
import './App.css';


function App() {

 

  return (
    <div >
    <NavLink to= 'Home'>Home </NavLink> &nbsp;
    <NavLink to= 'mycartpage'> My Cart Page </NavLink>
    
     <Routes >
      <Route path='/' element = { <Home /> } ></Route>
      <Route path = "/mycartpage" element = { <MyCartPage />} ></Route>
     </Routes>
 

    </div>
  );
}

export default App;
