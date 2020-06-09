import React from 'react';

const Footer = () => (
    <footer className="footer">
        <a href="/"><h2 className="footer--brand">EDUNOMICS</h2></a>
        <a href="/" className="footer--email">contact@edunomics.in</a>
        <div className="footer--social-media-icons-box">
            <a href="/"><img src="facebook.svg" className="footer--logo" alt="facebook logo"/></a>
            <a href="/"><img src="twitter.svg" className="footer--logo" alt="twitter logo"/></a>
            <a href="/"><img src="instagram-sketched.svg" className="footer--logo" alt="instagram logo"/></a>
        </div>
        <ul class="footer--nav">
            <li class="footer--nav-link">
                <a href="/">join us</a>
            </li>
            <li class="footer--nav-link">
                <a href="/">cookie policy</a>
            </li>
            <li class="footer--nav-link">
                <a href="/">terms of use</a>
            </li>
            <li class="footer--nav-link">
                <a href="/">tech</a>
            </li>
            <li class="footer--nav-link">
                <a href="/">private policy</a>
            </li>
        </ul>
    </footer>
)

export default Footer