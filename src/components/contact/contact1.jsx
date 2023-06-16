/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultContact from './default-contact';
import './style-contact-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-contact-v1.scss');
const html = require('!!raw-loader!./default-contact.html');

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

const contactOne = () => (
  <div className="🚀-contact-v1 layout-section">
    <DefaultContact />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default contactOne;
