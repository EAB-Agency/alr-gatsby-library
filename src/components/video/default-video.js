import React from 'react';

const DefaultVideo = () => (
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
);

export default DefaultVideo;
