import { Link } from "react-router-dom";
import Logo from '../Images/logo/plate.jpg'
import './Navbar.css'

const Navbar = () =>{
    
    return(
        <>
        <nav className="Navbar">

            <ul className="NavLinks">

                <li className="logo">
                <Link to="/">
                <img src={Logo} 
                alt="logo" width={60} height={60}></img>
                </Link>
                </li>
                

                <li className="list-item">
                    <Link to="/" className="navlink">Home</Link>
                </li>
                <li className="list-item">
                    <Link to="/About" className="navlink">About</Link>
                </li>
                <li className="list-item">
                    <Link to="/Plates" className="navlink">Plates</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar