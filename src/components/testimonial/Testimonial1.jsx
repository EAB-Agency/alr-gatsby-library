import React from 'react';
import DefaultTestimonial from './default-testimonial';
import SnippetToggler from '../utils/SnippetToggler';
import './style-testimonial-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-testimonial-v1.scss');
// const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-testimonial-v1.scss',
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

const TestimonialOne = () => (
  <div className="testimonial-v1 layout-section">
      <DefaultTestimonial />
      <SnippetToggler files={codeFiles} />
  </div>
);
export default TestimonialOne;
