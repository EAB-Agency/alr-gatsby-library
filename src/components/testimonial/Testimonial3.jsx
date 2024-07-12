import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultTestimonial from './default-testimonial';
import './style-testimonial-v3.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-testimonial-v3.scss');
const html = require('!!raw-loader!./default-testimonial.html');

const codeFiles = [
  {
    fileName: 'style-testimonial-v1.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'default-testimonial.html',
    code: html.default,
    language: 'html',
  },
];

const TestimonialThree= () => (
  <div className="🚀-testimonial-v3 layout-section">
    <DefaultTestimonial />
    <SnippetToggler files={codeFiles} />
  </div>
);
export default TestimonialThree;
