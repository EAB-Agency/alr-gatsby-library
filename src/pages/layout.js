import { Link } from 'gatsby';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <nav className='main-menu'>
        <ul>
          <li><Link to="javascript:void(0)" className='menu-icon'>&#9776;</Link></li>
          <li className='menu-items'>
            <Link to="/header">Headers</Link>
            <Link to="/socialproof">Social Proof</Link>
            <Link to="/apply">Apply</Link>
            <Link to="/survey">Survey</Link>
            <Link to="/school-tiles">School Tiles</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
