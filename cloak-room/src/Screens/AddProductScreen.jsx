import React, {useState, useEffect} from 'react';
import FormContainer from '../components/FormContainer';
import {Form, Button} from 'react-bootstrap'

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
      const {response} = await axios.post("https://localhost:7214/api/products",//go back to change
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
            </div>
    </div>
  )
}

export default AddProductScreen