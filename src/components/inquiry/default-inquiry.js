import React from 'react';
import AcquiaForm from '../utils/AcquiaForm';

const DefaultInquiry = () => (
  <section className="lp-intro-form" id="lp-intro-form">
    <div className="center lp-intro-form-wrapper">
      <div className="lp-intro-form-content">
        <div className="lp-intro">
          <h1 className="lp-intro-title">Headline related to ad copy.</h1>
          <div className="lp-intro-copy">
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu blandit netus
              scelerisque sit elit. Non lacus ultrices lectus purus a tortor
              quam interdum. Et sed iaculis enim.
            </p>
            <p>
              <strong>Key Benefits of the program/school</strong>
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur. Eu blandit netus
                scelerisque sit elit. Non lacus ultrices lectus purus a tortor
                quam interdum. Et sed iaculis enim.
              </li>
              <li>
                Non lacus ultrices lectus purus a tortor quam interdum. Et sed
                iaculis enim. Lorem ipsum dolor sit amet consectetur.
              </li>
              <li>
                Eu blandit netus scelerisque sit elit. Non lacus ultrices lectus
                purus a tortor quam interdum. Et sed iaculis enim.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu blandit netus
              scelerisque sit elit. Non lacus ultrices lectus purus a tortor
              quam interdum. Et sed iaculis enim.
            </p>
          </div>
        </div>

        <div className="lp-form">
          <div className="lp-form-fields" id="form-form">
            <AcquiaForm
              src="https://alr-creative-sj-2-0-sandbox-v2.contact-server.com/form/generate.js?id=48"
              multiple
            />
          </div>

          <div className="lp-form-footer" />
        </div>
      </div>
    </div>
  </section>
);

export default DefaultInquiry;
