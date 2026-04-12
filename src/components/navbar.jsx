// navbar component used across all pages

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        // main navigation wrapper
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    ShopShop
                </Link>

                {/* navigation links section */}
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">Cart</Link>
                </div>

                {/* authentication section for login/signup buttons */}
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link to="/authentication" className="btn btn-secondary">Login</Link>
                        <Link to="/authentication" className="btn btn-primary">SignUp</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}