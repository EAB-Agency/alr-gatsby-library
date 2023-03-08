import React from 'react';
import DefaultFooter from './default-footer';
import SnippetToggler from '../utils/SnippetToggler';
import './style-footer-v2.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-footer-v2.scss');
// const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-footer-v2.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  // {
  //   fileName: 'apply1.html',
  //   code: html.default,
  //   language: 'html',
  // },
];

const FooterTwo = () => (
  <div className="footer-v2 layout-section">
    <DefaultFooter />;
    <SnippetToggler files={codeFiles} />
  </div>
);

export default FooterTwo;
