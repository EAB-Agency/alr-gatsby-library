import React from 'react';
import DefaultHeaderNav from './default-header-nav';
import SnippetToggler from '../utils/SnippetToggler';
import './style-header-nav-v1.scss';

const styleSheet = require('!!raw-loader!./style-header-nav-v1.scss');

const HeaderWithNavOne = () => (
  <div class="header-nav-v1 layout-section">
    <DefaultHeaderNav />
    <SnippetToggler fileName="style-header-nav-v1.scss" code={styleSheet.default} />
  </div>
);

export default HeaderWithNavOne;
