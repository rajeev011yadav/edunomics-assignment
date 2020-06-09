import React from "react"
import SignUpForm from "../component/SignUpForm"

const SignUpPage = () => {
    return (
        <div className="sign-up-page">
            <div className="sign-up-page--side-background" />
            <div className="sign-up-page--form-container" >
                <SignUpForm />
            </div>
        </div>
    )
};

export default SignUpPage;