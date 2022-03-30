import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function AboutUsScreen() {
return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Welcome to the Cloakroom</h1>
                    <Button as={Link} to="/menu" variant="light" className="px-5 content-text">Menu</Button>
                </div>
                <div className='container aboutus'>
                <div className='text-center'>
                    <p1 className="content-text">
                    Independently run & charmingly characteristic - Bristol’s Cloakroom Café is here to offer everyone a unique & creative space to enjoy specialty coffee, freshly made juices, smoothies & pastries.
                    </p1>    
                </div>
                <div className='text-center aboutus'>
                    <p1 className="content-text">
                    Our cakes are all homemade & our soups, sandwiches & breakfast treats are created in house - using healthy, honest ingredients.
                    </p1>
                    </div>
                    <div className='text-center'>
                    <p1 className="content-text">
                    We’re proud to be Bristolian & excited to share an open door to our unique space for the city to explore.
                    </p1>
                    </div>
                </div>
                
                </div>
                
            </div>
    </div>
  )
}

export default AboutUsScreen