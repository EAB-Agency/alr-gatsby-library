import React from 'react';
import DefaultVideo from './default-video';
import SnippetToggler from '../utils/SnippetToggler';
import './style-video-v2.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-video-v2.scss');
// const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-video-v2.scss',
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

const VideoTwo = () => (
  <div className="🚀-video-v2 layout-section">
      <DefaultVideo />
      <SnippetToggler files={codeFiles} />
  </div>
);
export default VideoTwo;
