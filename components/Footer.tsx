'use client';

import React from 'react';

interface FooterProps {
  email: string;
}

const Footer: React.FC<FooterProps> = ({ email }) => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-top">
          <p className="footer-copyright">© 2023 All rights reserved</p>
          <button className="footer-email">{email}</button>
        </div>
        <img src="/assets/images/img_squares.svg" alt="Decorative pattern" className="footer-pattern" />
      </div>
    </footer>
  );
};

export default Footer;