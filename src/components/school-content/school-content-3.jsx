import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultSchoolContent from './default-school-content';
import './style-school-content-v3.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-school-content-v3.scss');
const html = require('!!raw-loader!./default-school-content.html');

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

const SchoolContentThree = () => (
  <div className="🚀-school-content-v3 layout-section">
    <DefaultSchoolContent />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolContentThree;
