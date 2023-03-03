/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultApply from './default-apply';
import './style-apply-v2.scss';
import * as styles from './style-apply-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-apply-v1.scss');
const html = require('!!raw-loader!./apply1.html');

const codeFiles = [
  {
    fileName: 'style-apply-v1.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToHide: '1-2',
  },
  {
    fileName: 'apply1.html',
    code: html.default,
    language: 'html',
    lineNumbersToDelete: '1-10',
  },
];

const applyOne = () => (
  // <div className={styles.lpApply}>
  <div className="apply-v1 layout-section">
    <DefaultApply />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default applyOne;
