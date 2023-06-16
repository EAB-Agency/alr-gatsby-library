import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Divide as Hamburger } from 'hamburger-react';

const Nav = () => {
  // this sets a variable (isOpen) that you can use to determine if the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="top-nav" id="topNav">
      <Hamburger
        toggled={isOpen}
        toggle={toggleMenu}
        className="toggle main-menu-btn"
      />
      <div
        id="menu"
        className={`main-menu-overlay menu-nav${isOpen ? ' show-menu' : ''}`}
      >
        <div className="main-menu" id="mainMenu">
          <Link to="/header" onClick={closeMenu}>
            Header/Nav
          </Link>
          <Link to="/apply" onClick={closeMenu}>
            Apply
          </Link>
          <Link to="/give" onClick={closeMenu}>
            Guide
          </Link>
          <Link to="/survey" onClick={closeMenu}>
            Survey
          </Link>
          <Link to="/inquiry" onClick={closeMenu}>
            Inquiry
          </Link>
          <Link to="/school-tiles" onClick={closeMenu}>
            School Tiles
          </Link>
          <Link to="/school-tiles-static" onClick={closeMenu}>
            Static School Tiles
          </Link>
          <Link to="/testimonial" onClick={closeMenu}>
            Testimonials
          </Link>
          <Link to="/video" onClick={closeMenu}>
            Videos
          </Link>
          <Link to="/stats" onClick={closeMenu}>
            Stats
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact Us
          </Link>
          <Link to="/footer" onClick={closeMenu}>
            Footer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
