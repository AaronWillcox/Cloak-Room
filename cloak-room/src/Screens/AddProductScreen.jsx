import React, {useState, useEffect} from 'react';
import FormContainer from '../components/FormContainer';
import {Form, Button, FormControl} from 'react-bootstrap'
import { render } from '@testing-library/react';
import axios from 'axios'

function AddProductScreen() {

    const [name, SetName] = useState('')
    const [price, SetPrice] = useState(0)
    const [image, setImage] = useState('')

    const submitHandler = async () =>{

        var file = document.getElementById("image")['files'][0]

        var reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)

        console.log(image)
        await fetch('https://localhost:7180/api/product', 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name: name,
                Price: price,
                Image: image
            })
        })
       .then(response => response.json())
       .catch((error) => {
            console.error('error', error)
       })
        

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
            <Form id="upload" encType="multipart/form-data">
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
                
                <Form.Group controlId="image" className="mb-3">
                    <Form.Label className="content-text">Product Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            
            <Button
                varient="primary"
                className="w=100"
                onClick={submitHandler}
            ><div className="content-text">Add Product</div>

            </Button>
            </Form>
            

            </FormContainer>


            </div>
    </div>
  )
}

export default AddProductScreen