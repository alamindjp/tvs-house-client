import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <footer className="mt-5">
        <p>
          <small>All Copyrights © {year} </small>
        </p>
      </footer>
    );
};

export default Footer;