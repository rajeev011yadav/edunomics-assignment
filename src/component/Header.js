import React from "react";

const Header = () => {
    return(
        <header className="header">
            <a className="header--title" href="/">
                <h3>Welcome to Edunomics</h3>
            </a>
            <div className="header--right-container">
                <button className="btn">Log In</button>
                <button className="btn btn--border">Sign Up</button>
            </div>
        </header>
    )
};

export default Header;