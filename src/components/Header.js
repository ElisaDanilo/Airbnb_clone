import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import Logo from "./assets/img/airbnb-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {

  return (
    <div className='header' >
      <Link to='/'>
    <img className="header_logo"
    src={Logo} alt="logo" />
      </Link>

<div className='header_center'>
    <input type="text" value="London"/> 
    <Link to='/list'>
    <SearchIcon className='header_center_icon'/> 
    </Link>
</div>

<div className='header_right'>
          <div className='header_icon'> <p>Become a host</p> </div>
          <div className='header_icon'> <LanguageIcon /> </div> 
              <div class="dropdown">
              <button className='header_icon' id='dropdown_button'> <AccountCircleIcon /> </button>  
                  <div class="dropdown-content">
                        <a href="#">Sign Up</a>
                        <a href="#">Log In</a>
                        <a href="#">Help</a>
                   </div>
              </div>
</div>

</div>
  )
}

export default Header
