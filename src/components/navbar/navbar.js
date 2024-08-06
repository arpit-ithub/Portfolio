import React from 'react';
import './navbar.css';
import logo from '../../assets/images/logo_sub.png';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link>

        </div>
        <p id='email'>emailarpityadav@gmail.com</p>
    </nav>
  )
}

export default Navbar