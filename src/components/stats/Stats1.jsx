import React from 'react';
import DefaultStats from './default-stats';
import SnippetToggler from '../utils/SnippetToggler';
import './style-stats-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-stats-v1.scss');
const html = require('!!raw-loader!./default-stats.html');

const codeFiles = [
  {
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    code: html.default,
    language: 'html',
  },
];

const StatsOne = () => (
  <div className="🚀-stats-v1 layout-section">
    <DefaultStats />
    <SnippetToggler files={codeFiles} />
  </div>
);
export default StatsOne;
