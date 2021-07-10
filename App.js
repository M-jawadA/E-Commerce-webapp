
import './App.css';
import { BrowserRouter,Route,Link} from "react-router-dom"
import Footer from './components/Footer';
import Grid from './components/Grid';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';





function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <ul>
         <li></li>
       </ul>
      
      
      </BrowserRouter>
     
       
      <NavBar/>  
      <Grid/> 
      <ProductList/>
      
      <Footer/> 
    </div>
  );
}

export default App;
