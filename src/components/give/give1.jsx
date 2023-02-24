import React from 'react';
import DefaultGive from './default-give';
import SnippetToggler from '../utils/SnippetToggler';

import * as styles from './style-give-v1.scss';

// eslint-disable-next-line import/no-unresolved
const styleSheet = require('!!raw-loader!./style-give-v1.scss');

const GiveOne = () => (
  <div className={styles.lpIntroForm}>
    <DefaultGive />;
    <SnippetToggler fileName="style-give-v1.scss" code={styleSheet.default} />
  </div>
);

export default GiveOne;
