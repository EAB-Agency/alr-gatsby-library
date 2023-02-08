import React from 'react';
import Header from './Header';
import './header-nav-styles.scss';

const WithNav = () => {
  return <div>
    <nav><ul><li>list item</li>
    <li>list 2</li></ul></nav>
    <Header />
  </div>;
};

export default WithNav;
