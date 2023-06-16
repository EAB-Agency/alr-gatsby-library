import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import './style-testimonial-v2.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-testimonial-v2.scss');
const html = require('!!raw-loader!./Testimonial2.html');

const codeFiles = [
  {
    fileName: 'style-testimonial-v2.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'Testimonial2.html',
    code: html.default,
    language: 'html',
  },
];

const TestimonialTwo= () => (
  <div className="🚀-testimonial-v2 layout-section">
    <div className="lp-testimonial">
      <div className="center testimonial-wrapper">
        <div className="testimonial-container">          
          <blockquote>
          <p>Whether through our flexible online programs or the option to turn real-life experience into college credit, it's our mission to assist our hardworking students however we can. The dedication our graduate students show in their careers, academics, and personal responsibilities inspires us every day. We're proud to be there for them during each step of their journey at MBU.</p>
          </blockquote>
          <div className="img-cite">
            <img alt=" " className="testimonial-photo" height="100" width="100" src="https://admiss.info/assets/lp-live/1537-hoo-g-live/img-sneha.jpeg" />
            <cite>Meghan Munsey<br/>Associate Director of First Year Experience<br/>MBU&nbsp;Online</cite>
          </div>
        </div>
      </div>
    </div>
    <SnippetToggler files={codeFiles} />
  </div>
);
export default TestimonialTwo;
