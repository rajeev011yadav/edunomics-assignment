import React from "react";

const LogInForm = () => (
    <form className="form login-form">
        <div className="input-field">
            <label htmlFor="userid">Email / Phone Number</label>
            <input type="text" id="userid" name="userId"></input>
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"></input>
        </div>
        <button className="btn login-form--btn">Log In</button>
    </form>
)

export default LogInForm