import React, {useState, useEffect} from 'react';
import FormContainer from '../components/FormContainer';
import {Form, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom';

import axios from 'axios'

function EditProductScreen() {
  return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Edit Product</h1>
                </div>
                </div>
            </div>
    </div>
  )
}

export default EditProductScreen