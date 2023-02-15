import React from 'react';
import { Link } from 'gatsby';
import './header-nav-styles.scss';

const WithNav = () => (
  <nav className="main-nav" id="main-nav">
    <div className="center">
      <ul>
        <li>
          <Link to="/apply">Apply</Link>
        </li>
        <li>
          <Link to="/discover">Download Guide</Link>
        </li>
        <li>
          <Link to="/start">Get Info</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default WithNav;
