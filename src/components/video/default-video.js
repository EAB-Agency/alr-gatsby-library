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

      <div className="video-container lazy-yt lazy-loaded" data-video-id="pYPdOOTyeY0">
      <div
        className="yt-facade"
        role="button"
        tabIndex="0"
        aria-label="Play YouTube video"
        style={{
          backgroundColor: 'rgb(0, 0, 0)',
          backgroundImage: `url("https://i.ytimg.com/vi_webp/pYPdOOTyeY0/sddefault.webp")`
        }}
      >
        <div className="play-button">
          <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
            <path
              className="play-button-bg"
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#212121"
              fillOpacity="0.8"
            />
            <path d="M 45,24 27,14 27,34" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default DefaultVideo;
