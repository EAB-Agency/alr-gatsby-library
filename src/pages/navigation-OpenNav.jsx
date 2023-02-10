
// function openNav() {
//   let menu = document.getElementById('menu');
//   menu.classList.toggle('main-menu-overlay-open');
// }

import React from 'react';

class MenuBtn extends React.Component {
  // This syntax ensures `this` is bound within openNav.
  openNav = () => {
    let menu = document.getElementById('menu');
    menu.classList.toggle('main-menu-overlay-open');
    console.log('working: ', this)
  };  
  render() {
    return (
      <button className='main-menu-btn' title='Main Menu' onClick={this.openNav}>
        &#9776;
      </button>
    );
  }
}



export default MenuBtn;

