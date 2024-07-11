import React from 'react';
import DefaultStats from './default-stats';
import SnippetToggler from '../utils/SnippetToggler';
import './style-stats-v4.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-stats-v4.scss');
const html = require('!!raw-loader!./stats4.html');

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

const StatsFour = () => (
  <div className="🚀-stats-v4 layout-section">
    <section className="lp-badges-section">
      <div className="center">
        <ul className="lp-stats-list">
          <li>
            <div className="item-container">
              <img alt="U.S. News &amp; World Report Rankings - " height="100" width="100" src="https://admiss.info/assets/lp-live/111-layout-lib-live/student-journey/img-badge-xxx.png"  />
            </div>
          </li>
          <li>
            <div className="item-container">
              <img alt="U.S. News &amp; World Report Rankings - " height="100" width="100" src="https://admiss.info/assets/lp-live/111-layout-lib-live/student-journey/img-badge-xxx.png" />
            </div>
          </li>
          <li>
            <div className="item-container">
              <img alt="U.S. News &amp; World Report Rankings - " height="100" width="100" src="https://admiss.info/assets/lp-live/111-layout-lib-live/student-journey/img-badge-xxx.png" />
            </div>
          </li>
        </ul>
      </div>
    </section>
    <SnippetToggler files={codeFiles} />
  </div>
);
export default StatsFour;
