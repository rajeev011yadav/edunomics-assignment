import React from 'react';
import {Link} from "react-router-dom";

const SignUpForm = () => {
    return (
        <form className="form signup-form">
            <h2>sign up</h2>
            <div className="input-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className="input-field">
                <label htmlFor="emailid">Email Id</label>
                <input type="email" id="emailid" />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="name" />
            </div>
            <div className="input-field">
                <label htmlFor="phone">Mobile Number</label>
                <input type="phone" id="phone" />
            </div>
            <Link to="/dashboard" className="btn btn--border signup-form--btn">Sign Up</Link>
            {/* <button className="btn btn--border signup-form--btn">Sign Up</button> */}
        </form>
    )
}

export default SignUpForm;