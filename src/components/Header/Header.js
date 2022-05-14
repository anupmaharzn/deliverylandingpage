import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "boxicons";
import './header.scss';
const Header = () => {
    const [Open, setOpen] = useState(false);
    const [Header, setHeader] = useState(false);
    //for toggle
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!Open);
    }
    //for headerbackground
    const handleHeaderbackground = () => {
        if (window.scrollY >= 80) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }
    window.addEventListener('scroll', handleHeaderbackground);

    return (
        <header className={Header ? `header scroll-header` : `header`} id="header">
            <nav className='nav container'>
                <a href='#' className='nav__logo'>Delivery</a>
                <div className={Open ? `nav__menu show_menu` : `nav__menu`} >
                    <ul className="nav__list">
                        <li className='nav__item'>
                            <Link to="home" spy={true} smooth={true} duration={50} className='nav__link' onClick={handleClick}>Home</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to="about" spy={true} smooth={true} duration={50} className='nav__link' onClick={handleClick}>About us</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to="services" spy={true} smooth={true} duration={50} className='nav__link' onClick={handleClick}>Services</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to="contact" spy={true} smooth={true} duration={50} className='nav__link' onClick={handleClick}>Contact us</Link>
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