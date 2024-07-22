import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultInquiry from './default-inquiry';
import AcquiaForm from '../utils/AcquiaForm';
import './style-inquiry-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-inquiry-v1.scss');
const html = require('!!raw-loader!./inquiry1.html');

const codeFiles = [
  {
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    code: html.default,
    language: 'html',
  },
];

const InquiryOne = () => (
  <div className="🚀-inquiry-v1 layout-section">
    <section className="lp-intro-form" id="lp-intro-form">
      <div className="lp-inquiry-title">
        <div className="center">
          <div className="content-container">
            <h1 className="lp-intro-title">Headline related to ad copy.</h1>
          </div>
        </div>
      </div>
      <div className="lp-intro-form-wrapper">
        <div className="center">
          <div className="lp-intro-form-content">
            <div className="lp-intro">
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
                <AcquiaForm src="https://alr-creative-sj-2-0-sandbox-v2.contact-server.com/form/generate.js?id=48"
                  multiple
                />
              </div>

              <div className="lp-form-footer" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <SnippetToggler files={codeFiles} />
  </div>
);

export default InquiryOne;
