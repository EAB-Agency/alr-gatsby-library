/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultApply from './default-apply';
import './style-apply-v2.scss';
import * as styles from './style-apply-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-apply-v1.scss');
const html = require('!!raw-loader!./apply1.html');

const applyOne = () => (
  // <div className={styles.lpApply}>
  <div className="apply-v1 layout-section">
    <DefaultApply />
    <SnippetToggler fileName="style-apply-v1.scss" code={html.default} />
  </div>
);

export default applyOne;
