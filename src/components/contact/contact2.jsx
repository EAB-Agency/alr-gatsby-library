import React from 'react';
import DefaultContact from './default-contact';
import './style-contact-v2.scss';

const contactTwo = () => (
  <div className="contact-v2 layout-section">
    <section className="lp-school-contact">
      <div className="center lp-school-wrapper">
        <div className="lp-school-contact-info">
          <div className="lp-school-contact-intro">
            <h3>Let’s Get Connected</h3>
            <p>
              Earning your master’s degree is an important step in your career,
              and we are here to support you. Don’t hesitate to reach out to get
              answers to any questions you may have!
            </p>
          </div>
          
          <ul className="lp-school-contact-options">
            <li className="lp-school-contact-phone">
              <a href="tel:xxx-xxx-xxxx">xxx-xxx-xxxx</a>
            </li>
            <li className="lp-school-contact-email">
              <a href="mailto:help@schooldomain.edu">help@schooldomain.edu</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default contactTwo;
