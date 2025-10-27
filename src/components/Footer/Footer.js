import React from 'react';
import { footer } from '../../portfolio'; // Adjust path if needed
import './Footer.css';

const Footer = () => {
  const { name, tagline, quickLinks, socialLinks, copyright, credit } = footer;

  return (
    <footer className='footer'>
      <div className='footer__top'>
        {/* Column 1: Name and Tagline */}
        <div className='footer-column footer-column--about'>
          <h4 className='footer__name'>{name}</h4>
          <p className='footer__tagline'>{tagline}</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className='footer-column'>
          <h4 className='footer__heading'>Quick Links</h4>
          <ul className='footer__list'>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className='footer__link'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect Links */}
        <div className='footer-column'>
          <h4 className='footer__heading'>Connect</h4>
          <ul className='footer__list'>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} target='_blank' rel='noopener noreferrer' className='footer__link'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className='footer__divider' />

      <div className='footer__bottom'>
        <p className='footer__copyright'>{copyright}</p>
        <p className='footer__credit'>{credit}</p>
      </div>
    </footer>
  );
};

export default Footer;