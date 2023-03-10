/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultGive from './default-give';
import './style-give-v3.scss';

const styleSheet = require('!!raw-loader!./style-give-v3.scss');
// const html = require('!!raw-loader!./default-apply.js');

const codeFiles = [
  {
    fileName: 'style-give-v3.scss',
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

const GiveThree = () => (
  <div className="🚀-give-v3 layout-section">
    <DefaultGive />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default GiveThree;
