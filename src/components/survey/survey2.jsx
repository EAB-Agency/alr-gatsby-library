import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultSurvey from './default-survey';
import './style-survey-v2.scss';

const styleSheet = require('!!raw-loader!./style-survey-v2.scss');
// const html = require('!!raw-loader!./default-apply.js');

const codeFiles = [
  {
    fileName: 'style-survey-v2.scss',
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

const SurveyTwo = () => (
  <div className="🚀-survey-v2 layout-section">
    <DefaultSurvey />;
    <SnippetToggler fileName="style-survey-v2.scss" code={styleSheet.default} />
  </div>
);

export default SurveyTwo;
