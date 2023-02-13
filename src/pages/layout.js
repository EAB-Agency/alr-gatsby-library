import { Link } from 'gatsby';
import React from 'react';
import ScriptTag from 'react-script-tag';
import MenuBtn from './navigation-OpenNav';
import CloseBtn from './navigation-CloseNav';

// const Navigation = props => (
//   <ScriptTag type='text/javascript' src='navigation.js' />
// )

// const openNav = () => {
//   let menu = document.getElementById("menu");
//   menu.classList.toggle("main-menu-overlay-open");
// }

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <nav className='top-nav' id='topNav'>
        <MenuBtn />
        <div id="menu" className='main-menu-overlay'>
          <CloseBtn />
          <div class='main-menu' id="mainMenu">
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
};

export default Layout;
