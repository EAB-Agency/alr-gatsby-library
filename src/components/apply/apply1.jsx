/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultApply from './default-apply';

import './style-apply-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-apply-v1.scss');

const applyOne = () => (
  <div className="apply-v1 layout-section">
    <DefaultApply />
    <SnippetToggler fileName="style-apply-v1.scss" code={styleSheet.default} />
  </div>
);

export default applyOne;
