import { Link } from 'gatsby';
import React from 'react';
import MenuBtn from './navigation-OpenNav';
import CloseBtn from './navigation-CloseNav';

const Layout = ({ children }) => (
    <div className="wrapper">
        <nav className="top-nav" id="topNav">
            <MenuBtn />
            <div id="menu" className="main-menu-overlay">
                <CloseBtn />
                <div className="main-menu" id="mainMenu">
                    <Link to="/header">Headers</Link>
                    <Link to="/socialproof">Social Proof</Link>
                    <Link to="/apply">Apply</Link>
                    <Link to="/survey">Survey</Link>
                    <Link to="/give">Give</Link>
                    <Link to="/school-tiles">School Tiles</Link>
                    <Link to="/school-tiles-static">Static School Tiles</Link>
                </div>
            </div>
        </nav>
        {children}
    </div>
);

export default Layout;
