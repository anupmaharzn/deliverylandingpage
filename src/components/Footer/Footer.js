import React from "react";
import './Footer.scss';
import 'boxicons';
const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <a href='#' className="footer__logo">Delivery</a>
                    <p className="footer__description">Order Products Faster <br /> Easier</p>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Our Services</h3>
                    <ul className="footer__links">
                        <li> <a href="#" className="footer__link">Pricing </a></li>
                        <li> <a href="#" className="footer__link">Discounts </a></li>
                        <li> <a href="#" className="footer__link">Report a bug </a></li>
                        <li> <a href="#" className="footer__link">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Our Company</h3>
                    <ul className="footer__links">
                        <li> <a href="#" className="footer__link">Blog</a></li>
                        <li> <a href="#" className="footer__link">Our mission</a></li>
                        <li> <a href="#" className="footer__link"> Get in touch</a></li>

                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Community</h3>
                    <ul className="footer__links">
                        <li> <a href="#" className="footer__link">Support</a></li>
                        <li> <a href="#" className="footer__link"> Questions</a></li>
                        <li> <a href="#" className="footer__link">Customer help</a></li>

                    </ul>
                </div>
                <div className="footer__social">
                    <a href="https://www.facebook.com/" className="footer__social-link"><box-icon type='logo' name='facebook-circle'></box-icon></a>
                    <a href="https://www.twitter.com/" className="footer__social-link"> <box-icon type='logo' name='twitter'></box-icon></a>
                    <a href="https://www.instagram.com/" className="footer__social-link"> <box-icon type='logo' name='instagram-alt'></box-icon> </a>
                </div>
            </div>
            <p className="footer__copy">&#169; Bedimcode by Anup Maharjan. All right reserved</p>
        </footer>
    )
}
export default Footer;