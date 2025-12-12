import { Link } from 'react-router-dom'

function Shop() {
    return (
        <div className="shop-page">
            <h1>Shop</h1>
            
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

export default Shop