/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultGive from './default-give';
import './style-give-v2.scss';

const styleSheet = require('!!raw-loader!./style-give-v2.scss');
const html = require('!!raw-loader!./default-give.html');

const codeFiles = [
  {
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    code: html.default,
    language: 'html',
    // lineNumbersToDelete: '1-5,43-47',
  },
];

const GiveTwo = () => (
  <div className="🚀-give-v2 layout-section">
    <DefaultGive />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default GiveTwo;
