import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

function MenuScreen() {
   //what we are trying to fetch
   const [products, SetProducts] = useState([]);
   //manage if fetching is done yet
   const [loading, SetLoading] = useState(true);

   //run use effect on component/page load
   useEffect(()=>{
       //test use effect
       console.log("Page Loaded!")

       //create function to call api for products
       const fetchProducts = async() =>{
           //api call
           const {data} = await axios.get("https://localhost:7180/api/product")
           console.log(data)
           SetProducts(data)
           if (data){
               SetLoading(false)
           }
       }

       //Call the function
       fetchProducts()
       
   },[]);

  
  
  return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Menu</h1>
                </div>

                </div>
        <Container>
        <Row>
          {products.map(product => (
            <Col sm={12} md={6} lg={4}>
            <Product product={product}/>
            </Col>))
          }
        </Row>

        </Container>

        </div>
    </div>
    
  )
}


export default MenuScreen
