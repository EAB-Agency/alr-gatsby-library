/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultContact from './default-contact';
import './style-contact-v1.scss';

const contactOne = () => (
  <div className="🚀-contact-v1 layout-section">
    <DefaultContact />;
    <SnippetToggler files={codeFiles} />
  </div>
);

export default contactOne;
