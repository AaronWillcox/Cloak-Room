import React, {useState, useEffect} from 'react';
import FormContainer from '../components/FormContainer';
import {Form, Button, FormControl} from 'react-bootstrap'

import axios from 'axios'

function AddProductScreen() {

    const [name, SetName] = useState('')
    const [price, SetPrice] = useState(0)

    const [posting, SetPosting] = useState(false)

    const submitHandler = async () =>{
      SetPosting(true)
      console.log('Button Clicked!')
      console.log(name)
      console.log(price)
      const {response} = await axios.post("https://localhost:7180/api/product",//go back to change
      {
          name:name,
          
          price:price
          
      })
      console.log(response)
  }

  return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Add a Product</h1>
                </div>
                </div>

            
            <FormContainer>
            <Form>
                  <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="content-text">Product Name</Form.Label>
                        <FormControl 
                        type="text" 
                        placeholder="Product Name..." 
                        onChange={(e)=>SetName(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="price">
                  <Form.Label className="content-text">Product Price</Form.Label>
                        <FormControl 
                        type="number" 
                        placeholder="Product Price (£)..." 
                        onChange={(e)=>SetPrice(e.target.value)}/>
                  </Form.Group>
            
            <Button
                varient="primary"
                className="w=100"
                onClick={submitHandler}
            >   Add Product

            </Button>
            </Form>
            

            </FormContainer>


            </div>
    </div>
  )
}

export default AddProductScreen