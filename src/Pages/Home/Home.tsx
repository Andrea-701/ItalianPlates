import React from 'react'
import { Link  } from 'react-router-dom'
import Slideshow from '../Slider/slider'


const Home = () => {
    return(

        <div className='Homepage'>

            <h1>Home</h1> 
            <p>Discover our selection of italian plates for your dinner,
            launch and also breakfast.<br>
            </br>Click the Button to find out some extra information</p>
            <Link to='/About' className="btn">About Us</Link>
            <p>Here some examples of the plates:</p>
            <Slideshow/>
            <p>Click the button below to discover our complete range of italian 
                plates</p>
            <Link to='/Plates' className="btn">Our Plates</Link>
        </div>
        
    )
}

export default Home




