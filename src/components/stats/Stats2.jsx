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
              <span className="emphasis">XXX</span>
              <span className="description">Best Business School</span>
              <span className="source">
                <em>U.S. News & World Report</em>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="emphasis">XXX</span>
              <span className="description">Best Business School</span>
              <span className="source">
                <em>U.S. News & World Report</em>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="emphasis">XXX</span>
              <span className="description">Best Business School</span>
              <span className="source">
                <em>U.S. News & World Report</em>
              </span>
            </div>
          </li>
          <li className="lp-stats-item">
            <div className="lp-stats-item-wrapper">
              <span className="emphasis">XXX</span>
              <span className="description">Best Business School</span>
              <span className="source">
                <em>U.S. News & World Report</em>
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
