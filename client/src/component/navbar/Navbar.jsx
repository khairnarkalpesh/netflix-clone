import React, { useState } from 'react'
import './navbar.scss'
import logo from './images/netflix-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import profile from './images/profile.jpg';
function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }


  return (
    <div>
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
          <div className="container">
            <div className="left">
              <img src={logo} alt='Netflix'/>

              <span>Home</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
            </div>
            <div className="right">
              <SearchIcon className="icon"/>
              <span>Kid</span>
              <NotificationsIcon className="icon"/>
              <img src={profile} alt="profile"/>

              <div className="profile">
              <ArrowDropDown className="icon"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>

              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar