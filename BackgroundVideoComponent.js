

import React,{useState} from 'react';
import './BackgroundVideoComponent.css';
import Search from './Search'
import {  FaAngleRight, FaGlobe } from 'react-icons/fa';
import logo from './images/1024px-Netflix_2015_logo.svg-removebg-preview.png'
const BackgroundVideoComponent = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
      setShowSubMenu(!showSubMenu);
    };
  return (
   <>
<div className='ui'>
</div>
<nav className="navbar">
  <div className="navbar-center">
    <div className="navbar-logo">
      <img src={logo} alt="Logo" />
    </div>
  </div>
  <div className="navbar-right">
  <div className="language-container">
      <button className="language-button" onClick={toggleSubMenu}>
      <FaGlobe /> Language<FaAngleRight />
      </button>
      {showSubMenu && (
        <div className="submenu">
          <div>hindi</div>
          <div>english</div>
        </div>
      )}
       <button className="login-button">Login</button>
    </div>
  </div>
</nav>
<div className='ttitlelo'>
   <h1 id='tit'>Unlimited movies, TV shows and more</h1>
   <h2 id='titt'>Watch anywhere. Cancel anytime.</h2>
  <h2 id='tittt'>Ready to watch? Enter your email to create or restart your membership.</h2>
   </div>
    <Search />

   </>
  );
};

export default BackgroundVideoComponent;
