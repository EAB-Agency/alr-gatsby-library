import React from 'react';

const DefaultFooter = () => (
  <footer className="school-footer">
    <div className="school-footer-wrapper center">
      <div className="school-footer-content">
        <div className="school-footer-name">the School Name</div>

        <address className="school-footer-address">
          Street Address
          <br />
          TBD, 2-digit state code #####
        </address>
      </div>

      <ul className="school-footer-links">
        <li>
          <a
            data-fancybox="help-modal"
            data-modal="true"
            data-src="#help-modal"
            href="/"
          >
            Technical Help
          </a>
        </li>
        <li>
          <a
            data-fancybox="privacy-modal"
            data-modal="true"
            data-src="#privacy-modal"
            href="/"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default DefaultFooter;
