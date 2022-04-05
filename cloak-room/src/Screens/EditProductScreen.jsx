import React, {useState, useEffect} from 'react';
import FormContainer from '../components/FormContainer';
import {Form, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom';

import axios from 'axios'

function EditProductScreen() {

  //looks at url
  const params = useParams();

  //get url id for product
  const productId = params.id

  //what we are trying to edit
  const [product, SetProduct] = useState({});

  //define values and functions for state
  const [name, SetName] = useState('')
  const [price, SetPrice] = useState(0)
  const [image, SetImage] = useState('')
  const [loading, SetLoading] = useState(true)
  const [posting, SetPosting] = useState(false)

//run use effect on component/page load
useEffect(()=>{
        
  //create function to call api for products
  const fetchProduct = async() =>{
      //api call
      const {data} = await axios.get(`https://localhost:7180/api/product/${productId}`)
      console.log(data)
      SetProduct(data)
      if (data){
          SetLoading(false)
      }
  }

  //Call the function
  fetchProduct()
  
},[]);

const submitHandler = async () =>{
  SetPosting(true)
  console.log('Button Clicked!')

  console.log(name)
  console.log(image)
  console.log(price)
  const {response} = await axios.put(`https://localhost:7180/api/product/${productId}`,
  {
      id:productId,
      name:name,
      price:price,
      image:image
  })
  console.log(response)
}


  return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Edit Product</h1>
                </div>
                </div>

                <FormContainer>

    <Form>

        <Form.Group className="mb-3" controlId="name">
            <Form.Label className="content-text">Product Name</Form.Label>
            <Form.Control 
                type="text" 
                placeholder={product.name}
                onChange={(e)=>SetName(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
            <Form.Label className="content-text">Product Price</Form.Label>
            <Form.Control 
                type="number" 
                placeholder={product.price} 
                onChange={(e)=>SetPrice(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
            <Form.Label className="content-text">Product Image</Form.Label>
            <Form.Control 
                type="text" 
                placeholder={product.image} 
                onChange={(e)=>SetImage(e.target.value)}
            />
        </Form.Group>

        
        <Button 
            variant="primary"
            className="w-100"
            onClick={submitHandler}
        ><div className="content-text">Save Changes</div></Button>
    </Form>

    </FormContainer>
            </div>
    </div>
  )
}

export default EditProductScreen