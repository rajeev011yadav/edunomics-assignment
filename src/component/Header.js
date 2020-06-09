import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <a className="header--title" href="/">
                <h3>Welcome to Edunomics</h3>
            </a>
            <div className="header--right-container">
                <button className="btn">Log In</button>
                <Link to="/signup">
                    <button className="btn btn--border">Sign Up</button>
                </Link>
            </div>
        </header>
    )
};

export default Header;