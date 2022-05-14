import React, { useState } from 'react';
import "boxicons";
import './header.scss';
function Header() {
    const [Open, setOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!Open);
    }
    return (
        <header className='header' id="header">
            <nav className='nav container'>
                <a href='#' className='nav__logo'>Delivery</a>
                <div className={Open ? `nav__menu show_menu` : `nav__menu`} id="nav-menu">
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link' onClick={handleClick}>Home</a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' className='nav__link' onClick={handleClick}>About us</a>
                        </li>
                        <li className='nav__item'>
                            <a href='#services' className='nav__link' onClick={handleClick}>Services</a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' className='nav__link' onClick={handleClick}>Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className='nav__toggle' id="nav-toggle">
                    <box-icon name='grid-alt' onClick={handleClick}></box-icon>
                </div>
                <a href='#' className='button button__header' >Order Now!</a>
            </nav>
        </header >
    )
}

export default Header