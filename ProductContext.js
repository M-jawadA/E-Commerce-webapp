import React  from "react"
import AA from "../images/img-2.png"
import BB from "../images/img-2.png"
import CC from "../images/img-3.png"
import DD from "../images/img-4.png"
import EE from "../images/img-5.png"
import GG from "../images/img-6.png"




const ProductContext =(props)=>{
       
    return(
        <div>
        <div>  
          
            <img src={AA}></img>
            <h1> {props.name}  {props.price} </h1>

        </div>
        <div>  
          
          <img src={BB}></img>
          <h1> {props.name}  {props.price} </h1>

      </div>
      <div>  
          
          <img src={CC}></img>
          <h1> {props.name}  {props.price} </h1>

      </div>
      <div>  
          
          <img src={DD}></img>
          <h1> {props.name}  {props.price} </h1>

      </div>
      <div>  
          
          <img src={EE}></img>
          <h1> {props.name}  {props.price} </h1>

      </div>

        </div>
        
           
    )
}

export default ProductContext;