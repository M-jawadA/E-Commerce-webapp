import React from 'react'
import './ProductList.css'
import AA from "../images/img-1.jpg"
import BB from "../images/img-2.jpg"
import CC from "../images/img-3.jpg"
import DD from "../images/img-4.jpg"
import EE from "../images/img-5.jpg"
import FF from "../images/img-6.jpg"
import GG from "../images/img-7.jpg"
import HH from "../images/img-8.jpg"
import II from "../images/img-9.jpg"
import JJ from "../images/img-10.jpg"
import KK from "../images/img-11.jpg"

function ProductList() {
    const product=[
        {
            id:1,
            name:'P1',
            image:AA,
            price:"$300"
        },
        {
            id:2,
            name:'P2',
            image:BB,
            price:"$300"
        },
        {
            id:3,
            name:'P3',
            image:CC,
            price:'$300'
        },
        {
            id:4,
            name:'P4',
            image:DD,
            price:'$300'
        },
        {
            id:5,
            name:'P5',
            image:EE,
            price:'$300'
        },
        {
            id:6,
            name:'P6',
            image:FF,
            price:'$300'
        },
        {
            id:7,
            name:'P5',
            image:GG,
            price:'$300'
        },
        {
            id:8,
            name:'P5',
            image:HH,
            price:'$300'
        },
        {
            id:9,
            name:'P5',
            image:II,
            price:'$300'
        },
        {
            id:10,
            name:'P5',
            image:JJ,
            price:'$300'
        },
        {
            id:11,
            name:'P5',
            image:KK,
            price:'$300'
        }
    ]
    const productList=product.map(pro=>
        <div className="wraper">
                    <div className="product" key={pro.id}>
                    
                        <img src={pro.image} alt="not found"></img>
                           
                    </div>
                            {pro.name} 
                            {pro.price} 
                    <div className="cartBtn">
                         <button>Add To Cart</button>
                    </div>
         </div>)
    return (
        <div className="pro"> 
            {productList}
        </div>
    )
}

export default ProductList
