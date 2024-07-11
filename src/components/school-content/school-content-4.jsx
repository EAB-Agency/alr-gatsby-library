import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultSchoolContent from './default-school-content';
import './style-school-content-v4.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-school-content-v4.scss');
const html = require('!!raw-loader!./school-content-4.html');

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

const SchoolContentFour = () => (
  <div className="🚀-school-content-v4 layout-section">
    <section className="lp-school-content-aside">
      <div className="center">
        <div className="content-container">
          <h2 className="lp-school-content-title">Same Mission. Same Quality. Same Degree.</h2>

          <p>Each of our PBA online courses is developed by our experienced faculty and undergoes thorough review to ensure that your online experience is the same high-quality degree that you would receive on campus. You will have access to all the same support systems and easy access to your faculty and peers. You’re not just gaining knowledge, but you’ll develop meaningful and long-lasting relationships as well.</p>
        </div>

        <aside className="callout-container">
          <p>PBA’s holistic approach to education ensures your learning is future-proof, preparing you for a dynamic and ever-evolving world.</p>
          {/* <img alt="U.S. News &amp; World Report Rankings - " height="100" width="100" src="https://admiss.info/assets/lp-live/111-layout-lib-live/student-journey/img-badge-xxx.png" /> */}
        </aside>
      </div>
    </section>
    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolContentFour;
