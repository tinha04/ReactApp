import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import{ Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='desktopMenu'>
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Experiences</Link>
          <Link className="desktopMenuListItem">Contact</Link>
        </div>
    </nav>

  )
}

export default Navbar;