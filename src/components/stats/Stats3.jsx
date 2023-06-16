import React from 'react';
import DefaultStats from './default-stats';
import SnippetToggler from '../utils/SnippetToggler';
import './style-stats-v3.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-stats-v3.scss');
const html = require('!!raw-loader!./default-stats.html');

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

const StatsThree = () => (
  <div className="🚀-stats-v3 layout-section">
    <div className="lp-stats-section">
      <div className="center">
        <ul className="lp-stats-list">
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="emphasis">8</span>
              <span className="title">Top-Ranked Programs</span>
              <span className="description">
                Supporting copy with enough verbiage to provide context and
                value. Supporting copy with enough verbiage to provide context
                and value.
              </span>
              <span className="source">
                - <i>U.S. News & World Report</i>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="emphasis">R1</span>
              <span className="title">Research University</span>
              <span className="description">
                Supporting copy with enough verbiage to provide context and
                value. Supporting copy with enough verbiage to provide context
                and value.
              </span>
              <span className="source">
                - <i>U.S. News & World Report</i>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="emphasis">#13</span>
              <span className="title">Best Value</span>
              <span className="description">
                Supporting copy with enough verbiage to provide context and
                value. Supporting copy with enough verbiage to provide context
                and value.
              </span>
              <span className="source">
                - <i>U.S. News & World Report</i>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="emphasis">Top 20</span>
              <span className="title">Salary-Boosting School</span>
              <span className="description">
                Supporting copy with enough verbiage to provide context and
                value. Supporting copy with enough verbiage to provide context
                and value.
              </span>
              <span className="source">
                - <i>U.S. News & World Report</i>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <SnippetToggler files={codeFiles} />
  </div>
);
export default StatsThree;
