import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function AboutUsScreen() {
return (
    <div>
        <div className="bg-banner container-flex">
                <div className="banner-content text-center">
                    <h1 className="heading-text">Welcome to the Cloakroom</h1>
                    <Button as={Link} to="/products" variant="light" className="px-5">Menu</Button>
                    <img src='./src/beverage-background.jpg'/>
                </div>

            </div>
    </div>
  )
}

export default AboutUsScreen