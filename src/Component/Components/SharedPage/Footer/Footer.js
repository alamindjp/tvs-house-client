import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <footer className="mt-3 footer-area d-flex align-items-center justify-content-center fixed-bottom">
        <p className='m-0'>
          <small>Copyrights © Tvs house {year} </small>
        </p>
      </footer>
    );
};

export default Footer;