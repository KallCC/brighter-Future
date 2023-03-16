import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


const Menu = () => {
  return (
    <>
      <a href="#wgpt3">What is GPT-3</a>
      <a href="#blog">Blog</a>
    </>
  );
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <a href="#home"><img src={logo} alt='logo' /></a>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <button type='button'>Sign in</button>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <button type='button' aria-label='Close menu'>
            <RiCloseLine color='#fff' size={28} onClick={() => setToggleMenu(false)} />
          </button>
          :
          <button type='button' aria-label='Open menu'>
            <RiMenu3Line color='#fff' size={28} onClick={() => setToggleMenu(true)} />
          </button>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <button>Sign in</button>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

}

export default Navbar