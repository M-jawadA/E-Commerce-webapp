import React,{useState} from 'react'
import "./Header.css"
import {Navbar,Nav,Button,FormControl,Form,NavDropdown} from 'react-bootstrap'   
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
//import ReorderIcon from "@material-ui"
//import SearchIcon from "@material-ui/icons/Search"
function NavBar() {
    
    return (
      
      <Navbar class="navbar navbar-expand-lg  " fixed="top" bg="dark" >
         <a class="navbar-brand text-white" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto ">
      <li class="nav-item active ">
        <a class="nav-link text-white ml-4" href="/">Home&nbsp;<i class="fas fa-home"></i> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white ml-4" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white ml-4" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item " href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled text-white ml-4" href="#"> ContactUs</a>
      </li>
    </ul>
    </div>
    <form class="form-inline my-2 my-lg-0 center">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>  */}
      <ul class="right">
        <li>
          <a href="">
            <span className="shoppingcart">
              <i class="fas fa-cart-plus"></i>
              
            </span>
             
          </a>
        </li>
        
      </ul>
      
      
    
  </form>
  <span className="cartCount">0</span> 
    </Navbar>
    
    )
}

export default NavBar;
