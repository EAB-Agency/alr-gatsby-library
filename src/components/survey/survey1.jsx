import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultSurvey from './default-survey';
import './style-survey-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-survey-v1.scss');
const html = require('!!raw-loader!./default-survey.html');

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

const SurveyOne = () => (
  <div className="🚀-survey-v1 layout-section">
    <DefaultSurvey />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default SurveyOne;
