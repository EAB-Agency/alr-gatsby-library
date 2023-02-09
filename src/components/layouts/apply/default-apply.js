import React from 'react';
import AcquiaForm from '../../AcquiaForm';

const DefaultApply = () => {
  return (
    <section className="lp-apply">
      <div className="center lp-apply-wrapper">
        <div className="content-container lp-apply-content">
          <div className="lp-apply-copy">
            <h2 className="lp-apply-title">
              Experience Support, Service, and Success
            </h2>
            <p>
              Expand your professional potential with one of our highly-regarded
              master’s or doctoral degrees. We promise a personalized,
              inclusive, and immersive learning experience that prepares you for
              greater success. Submit your application today with these
              benefits:
            </p>
            <ul>
              <li>GRE waivers available</li>
              <li>Application fee waivers available</li>
              <li>
                Scholarships, assistantships, and stipends available for most
                programs
              </li>
            </ul>
          </div>

          <div className="apply-form lp-apply-form" id="apply-form">
            <AcquiaForm src="//alr-wd-layout-library-sandbox-sj-1-2.contact-server.com/form/generate.js?id=2" />
          </div>

          <div className="lp-apply-footer">
            <p>Extra info about requirements, deadlines, etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultApply;
