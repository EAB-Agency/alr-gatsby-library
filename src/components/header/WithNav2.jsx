import React from 'react';
import DefaultHeaderNav from './default-header-nav';
import SnippetToggler from '../utils/SnippetToggler';
import './style-header-nav-v2.scss';

const styleSheet = require('!!raw-loader!./style-header-nav-v2.scss');

const HeaderWithNavTwo = () => (
  <div class="header-nav-v2 layout-section">
    <DefaultHeaderNav />
    <SnippetToggler fileName="style-header-nav-v2.scss" code={styleSheet.default} />
  </div>
);

export default HeaderWithNavTwo;
