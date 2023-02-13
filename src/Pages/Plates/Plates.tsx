import React from 'react'
import Pizza1 from '../Images/Pizza1.jpg'
import Pizza2 from '../Images/Pizza2.jpg'
import Pizza3 from '../Images/Pizza3.jpg'
import Focaccia1 from '../Images/Focaccia1.jpg'
import Focaccia2 from '../Images/Focaccia2.jpg'
import Focaccia3 from '../Images/Focaccia3.jpg'
import Tiramisu from '../Images/tiramisù.jpg'
import Lasagna from '../Images/Lasagna.jpg'
import './Plates.css'


const Plates = () => {
    return(
    <div>

        <h1>Plates</h1>
    
        <div className="plates">
            
           <div className='plates'>
            <div  className="plates-item">
                <img src={Pizza1} className='plates-image' alt='Pizza with Radish'></img>
            </div>
            <label className='description'>Pizza with Radish</label>
            </div>
            
            <div className='plates'>
            <div  className="plates-item">
                <img src={Pizza3} className='plates-image' alt='Classic Pizza'></img>
            </div>
            <label className='description'>Classic Pizza</label>
            </div>

            <div className='plates'>
            <div  className='plates-item'>
                <img src={Pizza2} className='plates-image' alt='Pizza with Würstel'></img>
            </div>
            <label className='description'>Pizza with Würstel</label>
            </div>

            <div className='plates'>
            <div  className='plates-item'>
                <img src={Focaccia1} className='plates-image' alt='Focaccia Bread with Olives'></img>
            </div>
            <label className='description'>Focaccia Bread with Olives</label>
            </div>

            <div className='plates'>
            <div  className="plates-item">
                <img src={Focaccia3} className='plates-image' alt='Classic Focaccia Bread'></img>
            </div>
            <label className='description'>Classic Focaccia Bread</label>
            </div>

            <div className='plates'>
            <div  className='plates-item'>
                <img src={Focaccia2} className='plates-image' alt='Focaccia Bread with Tomatoes'></img>
            </div>
            <label className='description'>Focaccia Bread with Tomatoes</label>
            </div>

            <div className='plates'>
            <div  className='plates-item'>
                <img src={Tiramisu} className='plates-image' alt='Tiramisu Cake'></img>
            </div>
            <label className='description'>Tiramisu Cake</label>
            </div>

            <div className='plates'>
            <div  className='plates-item'>
                <img src={Lasagna} className='plates-image' alt='Lasagna Bolognese'></img>
            </div>
            <label className='description'>Lasagna Bolognese</label>
            </div>
            
        </div>
    </div>
    )
}

export default Plates