/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultContact from './default-contact';
import './style-contact-v3.scss';

const contactThree = () => (
  <div className="🚀-contact-v3 layout-section">
    <DefaultContact />;
    <SnippetToggler files={codeFiles} />
  </div>
);

export default contactThree;
