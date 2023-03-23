import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultTiles from './default-tiles';
import './school-tiles-v3.scss';

const styleSheet = require('!!raw-loader!./school-tiles-v3.scss');
const html = require('!!raw-loader!./default-tiles.html');

const codeFiles = [
  {
    fileName: 'school-tiles-v3.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'default-tiles.html',
    code: html.default,
    language: 'html',
  },
];

const SchoolTilesThree = () => (
  <div className="🚀-school-tiles-v3 layout-section">
    <DefaultTiles />
    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolTilesThree;
