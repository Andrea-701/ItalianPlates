import { Link } from "react-router-dom"

const About = () => {
    return(
    <div>
        <h1>About</h1>

        <p>Welcome! <br/> Our selection of plates is based by people 
        who wants to recreate it in own kitchen or with some friends or who you want.
        The plates you see in this site is taken from a range of people,
        from the chef to the begginer the everyone can recreate it.</p>

        <div>
            <h2>What type of plates you can see in this site?</h2>
            <p>Here you can see plates mainly from Italy, because Italy cuisine 
                is made by fresh and healthy food and everyone can eat from the 
                person who like meat to the vegetarian.    
            </p>
        </div>

        <div>
            <p>Thanks for the attention and i hope you will enjoy this site!</p>
        </div>

        <div>
            <p>here the link for the plates</p>
            <Link to='/Plates' className="btn">Our Plates</Link>
        </div>
    </div>
    )
}

export default About