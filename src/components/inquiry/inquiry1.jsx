import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultInquiry from './default-inquiry';
import './style-inquiry-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-inquiry-v1.scss');
const html = require('!!raw-loader!./default-inquiry.html');

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

const InquiryOne = () => (
  <div className="🚀-inquiry-v1 layout-section">
    <DefaultInquiry />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default InquiryOne;
