import * as React from 'react';
import Pre from './Pre';

const SnippetToggler = ({ code, fileName, lineNumbersToHide }) => (
  <Pre
    codeString={code}
    language="css"
    fileName={fileName}
    lineNumbersToHide={lineNumbersToHide}
  />
);

export default SnippetToggler;
