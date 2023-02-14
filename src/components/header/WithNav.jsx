import React from 'react';
import Header from './Header';
import './header-nav-styles.scss';

const WithNav = () => (
    <nav className="main-nav" id="main-nav">
        <div className="center">
            <ul>
                <li>
                    <a href="/apply">Apply</a>
                </li>
                <li>
                    <a href="/discover">Download Guide</a>
                </li>
                <li>
                    <a href="/start">Get Info</a>
                </li>
                <li>
                    <a href="/explore">Explore</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default WithNav;
