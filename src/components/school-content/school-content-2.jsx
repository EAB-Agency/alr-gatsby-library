import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import './style-school-content-v2.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-school-content-v2.scss');
const html = require('!!raw-loader!./school-content-2.html');

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

const SchoolContentTwo = () => (
  <div className="🚀-school-content-v2 layout-section">
    <section className="lp-school">
      <div className="center lp-school-wrapper">
        <div className="lp-school-content">
          <h2 className="lp-school-content-title">
            Learn more about the School Name.
          </h2>
          <ul className="lp-school-link-list">
            <li className="lp-school-tile-item">
              <details>
                <summary>
                  <h3 className="headline">School link #1</h3>
                </summary>
                <div className="container">
                  <p>
                    School link text. Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45
                    BC, making it over 2000 years old.
                  </p>
                </div>
              </details>
            </li>
            <li className="lp-school-tile-item">
              <details>
                <summary>
                  <h3 className="headline">School link #2</h3>
                </summary>
                <div className="container">
                  <p>
                    School link text. Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45
                    BC, making it over 2000 years old.
                  </p>
                </div>
              </details>
            </li>
            <li className="lp-school-tile-item">
              <details>
                <summary>
                  <h3 className="headline">School link #3</h3>
                </summary>
                <div className="container">
                  <p>
                    School link text. Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45
                    BC, making it over 2000 years old.
                  </p>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolContentTwo;
