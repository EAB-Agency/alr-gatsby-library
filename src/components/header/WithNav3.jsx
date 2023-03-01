import React from 'react';
import DefaultHeaderNav from './default-header-nav';
import SnippetToggler from '../utils/SnippetToggler';
import './style-header-nav-v3.scss';

const styleSheet = require('!!raw-loader!./style-header-nav-v3.scss');

const HeaderWithNavThree = () => (
  <div class="header-nav-v3 layout-section">
    <DefaultHeaderNav />
    <SnippetToggler fileName="style-header-nav-v3.scss" code={styleSheet.default} />
  </div>
);

export default HeaderWithNavThree;
