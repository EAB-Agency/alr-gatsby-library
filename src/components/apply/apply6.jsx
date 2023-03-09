import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import AcquiaForm from '../utils/AcquiaForm';
import './style-apply-v6.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-apply-v6.scss');
const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-apply-v6.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'apply1.html',
    code: html.default,
    language: 'html',
  },
];

const applySix = () => (
  <div className="🚀-apply-v6 layout-section">
    <section className="lp-apply">
      <div className="center lp-apply-wrapper">
        <div className="content-container lp-apply-content">
          <div className="lp-apply-copy">
            <h2 className="lp-apply-title">
              Experience Support, Service, and Success
            </h2>
          </div>
          <div className="copy-wrap">
            <p>
              Expand your professional potential with one of our highly-regarded
              master's or doctoral degrees. We promise a personalized,
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

          <div className="apply-form-wrap">
            <p>
              Our career-ready graduate programs are offered in six-week class
              sessions, making it easy to advance at your own pace. Apply now to
              put your future on the fast track!
            </p>
            <div className="apply-form lp-apply-form">
              <AcquiaForm
                src="https://alr-wd-layout-library-sandbox-sj-1-2.contact-server.com/form/generate.js?id=2"
                multiple
              />
            </div>

            <div className="lp-apply-footer">
              <p>Extra info about requirements, deadlines, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SnippetToggler files={codeFiles} />
    
  </div>
);

export default applySix;
