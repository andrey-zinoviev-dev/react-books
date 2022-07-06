import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ListElement from '../ListElement/ListElement';
function Header() {
  return(
    <header className="header">
      <div className="container container_flex">        
        {/* <img className="header__logo" src={logo} alt="Логотип"></img> */}
        <span className='header__span'>大刀</span>
        <nav className='header__nav'>
          <ul className="header__nav-list">
            <ListElement classValue="header__nav-list-element">
              <Link to="/">Домой</Link>
            </ListElement>
            <ListElement classValue="header__nav-list-element">
              <Link to="/about">Обо мне</Link>
            </ListElement>
            {/* <li className='header__nav-list-element'>
              <button className='header__nav-list-element-button'>Домой</button>
            </li>
            <li className='header__nav-list-element'>
              <button className='header__nav-list-element-button'>Обо мне</button>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;