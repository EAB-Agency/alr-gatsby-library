import React from 'react';
import DefaultStats from './default-stats';
import SnippetToggler from '../utils/SnippetToggler';
import './style-stats-v2.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-stats-v2.scss');
// const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-stats-v2.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  // {
  //   fileName: 'apply1.html',
  //   code: html.default,
  //   language: 'html',
  // },
];

const StatsTwo = () => (
  <div className="stats-v2 layout-section">
    <div className="lp-stats-section">
      <div className="center">
        <ul className="lp-stats-list">
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="title">8 Top-Ranked Programs</span>
              <span className="description">
                Eight of Bear University's graduate programs are ranked among
                the top 20 in the nation, according to{' '}
                <i>U.S. News & World Report</i>.
              </span>
              <span className="link">
                <a
                  href="http://"
                  target="_blank"
                  id="link_description"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="title">R1 Research University</span>
              <span className="description">
                BU is designated as a “very high research activity” university
                by the Carnegie Foundation. Researching life-changing advances
                in medicine and technology is prioritized through the funding we
                receive and faculty we&nbsp;hire.
              </span>
              <span className="link">
                <a
                  href="http://"
                  target="_blank"
                  id="link_description"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="title">#13 Best Value</span>
              <span className="description">
                With a majority of students receiving funding or aid and a
                dedication to keeping costs competitive, it's no surprise BU is
                ranked a Best Value education by <i>Forbes</i> and other popular
                ranking publications.
              </span>
              <span className="link">
                <a
                  href="http://"
                  target="_blank"
                  id="link_description"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <SnippetToggler files={codeFiles} />
  </div>
);
export default StatsTwo;
