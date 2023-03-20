/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultContact from './default-contact';
import './style-contact-v3.scss';

const styleSheet = require('!!raw-loader!./style-contact-v3.scss');
// const html = require('!!raw-loader!./default-apply.js');

const codeFiles = [
  {
    fileName: 'style-contact-v3.scss',
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

const contactThree = () => (
  <div className="🚀-contact-v3 layout-section">
    <DefaultContact />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default contactThree;
