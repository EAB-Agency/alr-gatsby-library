/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultHeaderNav from './default-header-nav';
import './style-header-nav-v3.scss';

const styleSheet = require('!!raw-loader!./style-header-nav-v3.scss');
const html = require('!!raw-loader!./default-header.html');

const codeFiles = [
  {
    fileName: 'style-header-nav-v3.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'default-header.html',
    code: html.default,
    language: 'html',
  },
];

const HeaderWithNavThree = () => (
  <div className="🚀-header-nav-v3 layout-section">
    <DefaultHeaderNav />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default HeaderWithNavThree;
