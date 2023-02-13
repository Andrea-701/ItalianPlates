import React from "react"
import { Link } from "react-router-dom"
import './Footer.css'
import Instagram from '../Images/logo/instagram.svg'
import Linkedin from '../Images/logo/linkedin.svg'
import Github from '../Images/logo/github.svg'

const Footer = () => {
    return(
        <div className="footer-container">

            <div>
                    
                <h2>Social</h2>

                <ul className="social">

                

                <li className="social-link">
                <a href="https://www.instagram.com/andrea_cavallini_/" 
                target="_blank">
                <img src={Instagram} alt="Instagram"/></a>
                </li>

                <li className="social-link">
                <a href="https://www.linkedin.com/in/andrea-cavallini-263087223/"
                target="_blank">
                <img src={Linkedin}
                alt="Linkedin"/></a>
                </li>

                <li className="social-link">
                <a href="https://github.com/Andrea-701" target="_blank">
                <img src={Github}  
                alt="Github"/></a>
                </li>
                </ul>
                
                <p className="paragraph">Created by Andrea Cavallini</p>

                </div>
                
            </div>
    )
}

export default Footer