function Navigation() {
    return (
<>{/* Navigation Bar */}
    <footer className="footerNav">
        <nav>
            <ul id="homeNav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </nav>
    </footer></>
        
    )
}

export default Navigation