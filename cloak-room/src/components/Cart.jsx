import Button from '@restart/ui/esm/Button'
import { React, useEffect, useState } from 'react'
import {Badge} from 'react-bootstrap'

function Cart() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
            var products=JSON.parse(window.localStorage.getItem("products"))
            if (products){
                products = []
            }
            setCount(products.length)
    },[])

  
    return (
    <div>
        
        <Button>Basket <Badge bg="warning" text="dark">{count}</Badge></Button>
    </div>
  )
}

export default Cart