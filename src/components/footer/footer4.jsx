import React from 'react';
import DefaultFooter from './default-footer';
import './style-footer-v4.scss';

const FooterFour = () => (
  <div className="footer-v4 layout-section">
    <footer className="school-footer">
      <div className="school-footer-wrapper center">
        <div className="school-footer-content">
          <div className="school-footer-name">the School Name</div>

          <address className="school-footer-address">
            Street Address, <span className="line-break">TBD, 2-digit state code #####</span>
          </address>

          <ul className="school-footer-links">
            <li><a data-fancybox="help-modal" data-modal="true" data-src="#help-modal" href="#">Technical Help</a></li>
            <li><a data-fancybox="privacy-modal" data-modal="true" data-src="#privacy-modal" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default FooterFour;
