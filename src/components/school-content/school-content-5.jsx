import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultSchoolContent from './default-school-content';
import './style-school-content-v5.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-school-content-v5.scss');
const html = require('!!raw-loader!./school-content-5.html');

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

const SchoolContentFive = () => (
  <div className="🚀-school-content-v5 layout-section">
      <section className="lp-school">
        <div className="center lp-school-wrapper">
            <div className="lp-school-content">
              <div className="lp-school-content-intro">
                  <h2 className="lp-school-content-title">Learn More About Sykes College of Business</h2>
              </div>
              <ul className="lp-school-list">
                  <li className="lp-school-list-item">
                    <h3 className="headline">Headline</h3>
                    <div className="description-wrap">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                    <a href="#" target="_blank">Link Text</a>
                  </li>
                  <li className="lp-school-list-item">
                    <h3 className="headline">Headline</h3>
                    <div className="description-wrap">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <a href="#" target="_blank">Link Text</a>
                  </li>
                  <li className="lp-school-list-item">
                    <h3 className="headline">Headline</h3>
                    <div className="description-wrap">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <a href="#" target="_blank">Link Text</a>
                  </li>
              </ul>
            </div>
        </div>
      </section>
    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolContentFive;
