import React from 'react';

const DefaultSurvey = () => {
  return (
    <section classname="lp-intro-form">
      <div classname="center lp-intro-form-wrapper">
        <div classname="lp-intro-form-content">
          
          <div classname="lp-intro">
            <h2 classname="lp-intro-title">Let us know your future plans!</h2>
            <div classname="intro-copy">
              <p>Thank the prospect and encourage them to fill out the survey. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          <div classname="lp-form">
            <div classname="lp-form-initial form-initial" id="form-initial">
              <div classname="lp-form-intro"></div>

              <div classname="lp-form-fields" id="form-form">
              </div>

              <div classname="lp-form-footer"></div>
            </div>
            
            <div classname="lp-form-thanks form-thanks" id="form-thanks">
              <h3 classname="lp-form-thanks-title">Thank you!</h3>
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
