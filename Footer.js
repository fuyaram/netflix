import React, {useState} from 'react'
import './Footer.css'
import {  FaAngleRight, FaGlobe } from 'react-icons/fa';
const Footer = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
      setShowSubMenu(!showSubMenu);
    };
  return (
   <>
   <footer>
      <a href="." class="footer-title">
     <p id='op'> Questions? Call 000-800-919-1694</p>
      </a>
      <div class="footer-items">
        <ul>
          <h3>FAQ</h3>
          <li><a href=".">Privacy
</a></li>
          <li><a href=".">Investor Relations</a></li>
          <li><a href=".">speed test </a></li>
        </ul>
        <ul>
          <h3>Help Centre</h3>
          <li><a href=".">jobs</a></li>
          <li><a href=".">
Cookie Preferences</a></li>
          <li><a href=".">legal notices</a></li>
        </ul>
        <ul>
          <h3>Make Money with Us</h3>
          <li><a href=".">Ways to Watch</a></li>
          <li><a href=".">
Corporate Information</a></li>
          <li><a href=".">only on netflix</a></li>

        </ul>
        <ul>
          <h3>
          Media Centre</h3>
          <li><a href=".">terms of use</a></li>
          <li><a href=".">contact use</a></li>
        </ul>
      </div>
      <div className="language-container44">
      <button className="language-button44" onClick={toggleSubMenu}>
      <FaGlobe /> Language<FaAngleRight />
      </button>
      {showSubMenu && (
        <div className="submenu">
          <div>hindi</div>
          <div>english</div>
        </div>
      )}
    </div>
    <h1 id='bot'>Netflix India</h1>
    </footer>
   </>
  )
}

export default Footer
