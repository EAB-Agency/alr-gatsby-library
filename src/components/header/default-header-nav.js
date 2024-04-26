import React from 'react';

const DefaultHeaderNav = () => (
  <div className="header-nav">
    <div className="school-header-nav-wrapper">
      <header className="school-header">
        <div className="center school-header-wrapper">
          <div className="school-logo">The School Name</div>
        </div>
      </header>
      <nav className="main-nav" id="main-nav">
        <div className="center">
          <ul>
            <li>
              <a href="#explore">Explore</a>
            </li>
            <li>
              <a href="#guide">Download Guide</a>
            </li>
            <li>
              <a href="#request">Get Info</a>
            </li>
            <li>
              <a href="#apply" className="active">
                Apply
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default DefaultHeaderNav;
