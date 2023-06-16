import React from 'react';
import DefaultVideo from './default-video';
import SnippetToggler from '../utils/SnippetToggler';
import './style-video-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-video-v1.scss');
const html = require('!!raw-loader!./default-video.html');

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

const VideoOne = () => (
  <div className="🚀-video-v1 layout-section">
      <DefaultVideo />
      <SnippetToggler files={codeFiles} />
  </div>
);
export default VideoOne;
