import * as React from 'react';
import Pre from './Pre';

const SnippetToggler = ({ code, fileName }) => (
  <Pre codeString={code} language="css" fileName={fileName} />
);

export default SnippetToggler;
