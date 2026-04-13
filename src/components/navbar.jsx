// navbar component used across all pages

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth()

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
                {!user ?  <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link to="/authentication" className="btn btn-secondary">Login</Link>
                        <Link to="/authentication" className="btn btn-primary">SignUp</Link>
                    </div>
                </div> : (
                    <div className="navbar-user">
                        <span className="navbar-greeting">Hello, {user.email}</span>
                        <button className="btn btn-secondary" onClick={ logout }>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}