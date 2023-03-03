import React from 'react';
import DefaultGive from './default-give';
import SnippetToggler from '../utils/SnippetToggler';
import './style-give-v2.scss';
import * as styles from './style-give-v1.scss';

const GiveOne = () => (
  <div className="give-1 layout-section">
    <DefaultGive />;
    {/* <SnippetToggler fileName="style-give-v1.scss" code={styleSheet.default} /> */}
  </div>
);

export default GiveOne;
