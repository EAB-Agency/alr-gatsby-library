import React from 'react';

const DefaultHeaderNav = () => (
  <div className="header-nav">
    <div className="school-header-nav-wrapper">
      <header className="school-header">
        <div className="center school-header-wrapper">
          <h1 className="school-logo">The School Name</h1>
        </div>
      </header>
      <nav className="main-nav" id="main-nav">
        <div className="center">
          <ul>
            <li>
              <a href="#apply">Apply</a>
            </li>
            <li>
              <a href="#discover">Download Guide</a>
            </li>
            <li>
              <a href="#start">Get Info</a>
            </li>
            <li>
              <a href="#explore">Explore</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default DefaultHeaderNav;
