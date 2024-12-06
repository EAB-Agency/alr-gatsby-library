import React from 'react';
import DefaultVideo from './default-video';
import SnippetToggler from '../utils/SnippetToggler';
import './style-video-v3.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-video-v3.scss');
const html = require('!!raw-loader!./Video3.html');

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

const VideoThree = () => (
  <div className="🚀-video-v3 layout-section">
    <section className="lp-video">
      <div className="center lp-video-wrapper">
        <div className="video-intro">
          <h2>Reach Your Fullest Potential</h2>
          <p>
            Watch our video&nbsp;to learn more about how a degree from SEU can
            help you start achieving your career goals sooner.
          </p>
        </div>

        <div className="video-container">
          <iframe
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen=""
            frameBorder="0"
            height="360"
            src="https://player.vimeo.com/video/492615099?h=e8619e6432"
            width="640"
          />
        </div>
      </div>
    </section>
    <SnippetToggler files={codeFiles} />
  </div>
);
export default VideoThree;
