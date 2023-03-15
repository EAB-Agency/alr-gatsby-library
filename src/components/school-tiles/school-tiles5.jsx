import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultTiles from './default-tiles';
import './school-tiles-v5.scss';

const styleSheet = require('!!raw-loader!./school-tiles-v5.scss');
// const html = require('!!raw-loader!./default-apply.js');

const codeFiles = [
  {
    fileName: 'school-tiles-v5.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  // {
  //   fileName: 'apply1.html',
  //   code: html.default,
  //   language: 'html',
  //   lineNumbersToDelete: '1-5,43-47',
  // },
];

const SchoolTilesFive = () => (
  <div className="🚀-school-tiles-v5 layout-section">
    <section className="lp-school">
      <div className="center lp-school-wrapper">
        <div className="lp-school-content">
          <h3 className="lp-school-content-title">
            Learn more about the School Name.
          </h3>
          <ul className="lp-school-link-list">
            <li className="lp-school-link-item">
              <a
                href="https://[[ EDU URL ]]"
                id="link_linkdescription"
                target="_blank"
                rel="noreferrer"
              >
                <span className="lp-school-link-wrapper">
                  <span className="headline">
                    Degrees That Move at the Pace of Your&nbsp;Life
                  </span>
                  <span className="description">
                    Take charge of your career with our accelerated, flexible,
                    online graduate&nbsp;programs.
                  </span>
                  <span className="more">Learn More</span>
                </span>
              </a>
            </li>
            <li className="lp-school-link-item">
              <a
                href="https://[[ EDU URL ]]"
                id="link_linkdescription"
                target="_blank"
                rel="noreferrer"
              >
                <span className="lp-school-link-wrapper">
                  <span className="headline">
                    Unparalleled Support for Unparalleled Success
                  </span>
                  <span className="description">
                    From personal admissions representative to career services,
                    we’re here to&nbsp;help.
                  </span>
                  <span className="more">Learn More</span>
                </span>
              </a>
            </li>
            <li className="lp-school-link-item">
              <a
                href="https://[[ EDU URL ]]"
                id="link_linkdescription"
                target="_blank"
                rel="noreferrer"
              >
                <span className="lp-school-link-wrapper">
                  <span className="headline">
                    An Affordable, Quality&nbsp;Education
                  </span>
                  <span className="description">
                    Explore tuition and financial aid and finance your
                    future&nbsp;affordably.
                  </span>
                  <span className="more">Learn More</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolTilesFive;
