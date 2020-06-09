import React, {Fragment}from "react";
import Header from "../component/Header";
import LogInForm from "../component/LogInForm";
import Footer from "../component/Footer";

const LandingPage = () => (
        <Fragment>
            <Header />
            <div className="landing-page--header">
                <h1 className="landing-page--moto">
                    Where do you want<br/>to go today?
                </h1>
                <h3 className="landing-page--sub-moto">
                    share your ultimate goal<br/> with us(not visible in video)
                </h3>
                <div className="login-form-container">
                    <LogInForm />
                </div>
            </div>
            <div className="container landing-page--body">
                <h2>Whatever your style, travel your way.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices finibus rhoncus. Sed at convallis justo, nec consectetur tellus. Nam dignissim metus non felis vulputate, a sagittis enim vehicula. Aenean eu maximus tellus. Fusce non dolor eget sapien malesuada facilisis. Suspendisse quis ex pharetra, tempus mi et, porttitor leo. Duis sem ex, porttitor at ante in, semper rutrum ante. Nunc non neque sed mi hendrerit ullamcorper. Duis finibus pharetra pretium. Nulla lobortis felis nisi, vitae tincidunt felis ornare sit amet.
                </p>
                <img src="https://images.pexels.com/photos/449609/pexels-photo-449609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="500px"alt="climbing"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices finibus rhoncus. Sed at convallis justo, nec consectetur tellus. Nam dignissim metus non felis vulputate, a sagittis enim vehicula. Aenean eu maximus tellus. Fusce non dolor eget sapien malesuada facilisis. Suspendisse quis ex pharetra, tempus mi et, porttitor leo. Duis sem ex, porttitor at ante in, semper rutrum ante. Nunc non neque sed mi hendrerit ullamcorper. Duis finibus pharetra pretium. Nulla lobortis felis nisi, vitae tincidunt felis ornare sit amet.
                </p>
            </div>
            <Footer />
        </Fragment>
)

export default LandingPage;