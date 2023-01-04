import React, {useState} from 'react';
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import hamburger from "../images/icon-hamburger.svg";
import heroImage from "../images/desktop/image-hero.jpg";


function Header() {
    const navbarToggle = () => {
      const navbarNav = document.querySelector(".navbar-nav");
      navbarNav.classList.toggle('active');
    }

    return (
    <header style={{backgroundImage: `url(${heroImage})`}}>
        <div class="navbar">
            {/* navbar-brand for large screen  */}
            <div class="navbar-brand">
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            {/* header navbar  */}
            <nav class="navbar-nav" aria-label="Header nav">

                 {/* navbar nav brand for mobile  */}
                <div class="mobile-nav-brand">
                    <a href="#"><img src={logo} alt="" /></a>
                    <div id="close-btn" onClick={navbarToggle}>
                    <img src={close} alt="" />
                    </div>
                </div>

                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>

             {/* navbar hamburger */}
            <div class="nav-toggler" id="open-btn" onClick={navbarToggle}>
            <img src={hamburger} alt="" />
            </div>

        </div>

        <section class="banner">
            <h1>Immersive experiences that deliver</h1>
        </section>
    </header>
)

}

export default Header;
