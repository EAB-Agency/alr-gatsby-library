
// function openNav() {
//   let menu = document.getElementById('menu');
//   menu.classList.toggle('main-menu-overlay-open');
// }

import React from 'react';

// class MenuBtn extends React.Component {
//   // This syntax ensures `this` is bound within openNav.
//   openNav = () => {
//     let menu = document.getElementById('menu');
//     menu.classList.toggle('main-menu-overlay-open');
//     console.log('working: ', this)
//   };  
//   render() {
//     return (
//       <button className='main-menu-btn' title='Main Menu' onClick={this.openNav}>
//         &#9776; MENU
//       </button>
//     );
//   }
// }

class MenuBtn extends React.Component {
  // This syntax ensures `this` is bound within openNav.
  openNav = () => {
    document.getElementById('menu').style.width = '100%';
    // document.getElementById("main").classList.toggle('move-main');
    // menu.style.width = "20rem";
    // menu.style.overflow = "visible";
    // document.getElementById("main").style.marginLeft = "20rem";
  };  
  render() {
    return (
      <button className='main-menu-btn' id="menu-btn" title='Main Menu' onClick={this.openNav}>
        &#9776; MENU
      </button>
    );
  }
}



export default MenuBtn;

