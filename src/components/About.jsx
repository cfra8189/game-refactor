import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="aboutPage">
    <div id="comingSoon"></div>
    <h1>We're Cooking Something Up...</h1>
    
    {/* Navigation Bar */}
    <footer className="footerNav">
        <nav>
            <ul id="homeNav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </nav>
    </footer>
        </div>
    )
}

export default About