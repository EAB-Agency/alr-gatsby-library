import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultApply from './default-apply';
import './style-apply-v3.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-apply-v3.scss');
const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-apply-v3.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'apply1.html',
    code: html.default,
    language: 'html',
  },
];

const applyThree = () => (
  <div className="apply-v3 layout-section">
    <DefaultApply />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default applyThree;
