import React from 'react';

const DefaultHeaderNav = () => (
  <div class="header-nav">
    <div class="center school-header-nav-wrapper">
      <header class="school-header">
        <div class="center school-header-wrapper">
          <h1 class="school-logo">The School Name</h1>
        </div>
      </header>
      <nav class="main-nav" id="main-nav">
        <div class="center">
          <ul>
            <li><a href="/apply">Apply</a></li>
            <li><a href="/discover">Download Guide</a></li>
            <li><a href="/start">Get Info</a></li>
            <li><a href="/explore">Explore</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default DefaultHeaderNav;
