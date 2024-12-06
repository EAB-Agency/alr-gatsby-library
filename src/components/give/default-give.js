import React from 'react';
import AcquiaForm from '../utils/AcquiaForm';

const DefaultGive = () => (
  <section className="lp-intro-form">
    <div className="center lp-intro-form-wrapper">
      <div className="lp-intro-form-content">
        <div className="lp-intro">
          <h2 className="lp-intro-title">
            Download <strong>global-token=content-give-title!</strong>
          </h2>
          <div className="lp-intro-copy">
            <p>
              Copy that introduces the content give and highlights what it's all
              about. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer vestibulum lacus et elit commodo, non gravida orci
              fringilla. Nulla nec quam sed velit commodo pulvinar sed sed quam.
            </p>
          </div>
        </div>

        <div className="lp-form">
          <div className="lp-form-initial form-initial" id="form-initial">
            <div className="lp-form-intro">
              <p>
                Fill out the information below, and once you hit the "Access My
                Guide" button, you'll be able to download your guide.
              </p>
            </div>

            <div className="lp-form-fields" id="form-form">
              <AcquiaForm
                src="https://alr-creative-sj-2-0-sandbox-v2.contact-server.com/form/generate.js?id=32"
                multiple
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DefaultGive;
