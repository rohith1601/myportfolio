import React, { useRef, useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const NavBar = () => {
  const [menu, setMenu] = useState("Home");
  const menuRef=useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='' height={77} width={107} />
      <img src={menu_open} alt='' className='nav-mob-open' onClick={openMenu}/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt='' className='nav-mob-close' onClick={closeMenu}/>
        <li className={menu === "Home" ? 'active' : ''} onClick={() => handleMenuClick("Home")}>
          <AnchorLink className="anchor-link" href="#hero"><p>Home</p></AnchorLink>
        </li>
        <li className={menu === "About Me" ? 'active' : ''} onClick={() => handleMenuClick("About Me")}>
          <AnchorLink className="anchor-link" href="#about"><p>About Me</p></AnchorLink>
        </li>
        <li className={menu === "Certifications" ? 'active' : ''} onClick={() => handleMenuClick("Certifications")}>
          <AnchorLink className="anchor-link" href="#certifications"><p>Certifications</p></AnchorLink>
        </li>
        <li className={menu === "Projects" ? 'active' : ''} onClick={() => handleMenuClick("Projects")}>
          <AnchorLink className="anchor-link" href="#projects"><p>Projects</p></AnchorLink>
        </li>
        <li className={menu === "Contact Me" ? 'active' : ''} onClick={() => handleMenuClick("Contact Me")}>
          <AnchorLink className="anchor-link" href="#contact"><p>Contact Me</p></AnchorLink>
        </li>
      </ul>
      {/* <div className="nav-connect">
      <AnchorLink className="anchor-link" href="#contact">
        Connect With Me
      </AnchorLink>
      </div> */}
    </div>
  );
}

export default NavBar;
