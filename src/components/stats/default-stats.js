import React from 'react';

const DefaultStats = () => (
  <div className="lp-stats-section">
    <div className="center">
      <ul className="lp-stats-list">
        <li className="lp-stats-item">
          <div className="lp-stats-item-wrapper">
            <span className="emphasis">8</span>
            <span className="title">Top-Ranked Programs</span>
            <span className="description">
              Eight of Bear University’s graduate programs are ranked among the
              top 20 in the nation, according to <i>U.S. News & World Report</i>
              .
            </span>
          </div>
        </li>
        <li className="lp-stats-item">
          <div className="lp-stats-item-wrapper">
            <span className="emphasis">R1</span>
            <span className="title">Research University</span>
            <span className="description">
              BU is designated as a “very high research activity” university by
              the Carnegie Foundation. Researching life-changing advances in
              medicine and technology is prioritized through the funding we
              receive and faculty we&nbsp;hire.
            </span>
          </div>
        </li>
        <li className="lp-stats-item">
          <div className="lp-stats-item-wrapper">
            <span className="emphasis">#13</span>
            <span className="title">Best Value</span>
            <span className="description">
              With a majority of students receiving funding or aid and a
              dedication to keeping costs competitive, it’s no surprise BU is
              ranked a Best Value education by <i>Forbes</i> and other popular
              ranking publications.
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default DefaultStats;
