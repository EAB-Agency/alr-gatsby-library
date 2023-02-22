import React from 'react';
import DefaultFooter from './default-footer';
import './style-footer-v1.scss';

const FooterOne = () => (
  <div className="footer-v1 layout-section">
    <footer class="school-footer">
      <div class="school-footer-wrapper center">
        <div class="school-footer-name school-logo">the School Name</div>

        <div class="school-footer-content">
          <address class="school-footer-address">Street Address<br />
          TBD, 2-digit state code #####</address>

          <ul class="school-footer-links">
            <li><a data-fancybox="help-modal" data-modal="true" data-src="#help-modal" href="#">Technical Help</a></li>
            <li><a data-fancybox="privacy-modal" data-modal="true" data-src="#privacy-modal" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>

  </div>
);

export default FooterOne;
