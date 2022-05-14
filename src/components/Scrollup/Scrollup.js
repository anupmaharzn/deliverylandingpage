import React, { useState } from 'react';
import './scrollup.scss';
import 'boxicons';
const Scrollup = () => {
  const [showScroll, setShowScroll] = useState(false);

  const showScrollhandler = () => {
    if (window.scrollY >= 560) {
      setShowScroll(true);
    }
    else {
      setShowScroll(false);
    }
  }
  window.addEventListener('scroll', showScrollhandler);

  return (
    <a href="#" className={showScroll ? `scrollup show-scrollup` : `scrollup`} >
      <box-icon className="scrollup__icon" name='up-arrow-alt'></box-icon>
    </a>
  )
}

export default Scrollup;