import { Link } from 'gatsby';
import React from 'react';

// function closeNav() {
//   document.getElementById('menu').classList.toggle('main-menu-overlay-open');
// }

class CloseBtn extends React.Component {
  // This syntax ensures `this` is bound within closeNav.
  closeNav = () => {
    document.getElementById('menu').classList.toggle('main-menu-overlay-open');
    console.log('working: ', this)
  };  
  render() {
    return (
      <button className='close-btn' onClick={this.closeNav}>&times;</button>
    );
  }
}

export default CloseBtn;