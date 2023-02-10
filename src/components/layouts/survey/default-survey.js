import React from 'react';
import AcquiaForm from '../../AcquiaForm';

const DefaultSurvey = () => {
  return (
    <section className="lp-intro-form">
      <div className="center lp-intro-form-wrapper">
        <div className="lp-intro-form-content">
          
          <div className="lp-intro">
            <h2 className="lp-intro-title">Let us know your future plans!</h2>
            <div className="intro-copy">
              <p>Thank the prospect and encourage them to fill out the survey. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          <div className="lp-form">
            <div className="lp-form-initial form-initial" id="form-initial">
              <div className="lp-form-intro"></div>

              <div className="lp-form-fields" id="form-form">
                <AcquiaForm src="//alr-wd-layout-library-sandbox-sj-1-2.contact-server.com/form/generate.js?id=6" multiple/>
              </div>

              <div className="lp-form-footer"></div>
            </div>
            
            <div className="lp-form-thanks form-thanks" id="form-thanks" style={{ display: 'none'}} >
              <h3 className="lp-form-thanks-title">Thank you!</h3>
              <p>We'll be sure to keep in touch with important news and updates.</p>
              <hr />
              <p>Ready to apply to global-token=school-name-alt now? That's great! Simply <a href="global-token=application-url" id="link_apply_srv_thanks">submit your application</a> and we'll consider you for admission soon.<br /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultSurvey;
