/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultApply from './default-apply';
import './style-apply-v1.scss';

const styleSheet = require('!!raw-loader!./style-apply-v1.scss');
const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-apply-v1.scss',
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

const ApplyOne = () => (
  <>
    <DefaultApply className="🚀-apply-v1 layout-section" />
    <SnippetToggler files={codeFiles} />
  </>
);

export default ApplyOne;
