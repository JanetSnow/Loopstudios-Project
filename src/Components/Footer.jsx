import React from 'react';
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";


function Footer(){
    return (
    <footer>
      <div class="footer-left">
        {/* footer brand  */}
        <div class="footer-brand">
          <a href="#"><img src={logo} alt="" /></a>
        </div>
        {/* footer nav  */}
        <nav class="footer-nav">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-right">
        <div class="social-links">
          <a href="#"><img src={facebook} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
          <a href="#"><img src={pinterest} alt="" /></a>
          <a href="#"><img src={instagram} alt="" /></a>
        </div>
        <p class="copyRight">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
    )
}

export default Footer;