import { Link } from 'gatsby';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <nav className='main-menu'>
        <ul>
          <li className='menu-items'> <Link to="/header">Headers</Link></li>
           <li> <Link to="/socialproof">Social Proof</Link></li>
           <li> <Link to="/apply">Apply</Link></li>
           <li> <Link to="/survey">Survey</Link></li>
           <li><Link to="/give">Give</Link></li>
           <li><Link to="/school-tiles">School Tiles</Link></li>
           <li><Link to="/school-tiles-static">Static School Tiles</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
