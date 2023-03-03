import * as React from 'react';
import Pre from './Pre';

const SnippetToggler = ({ code, fileName, lineNumbersToHide }) => (
  <Pre
    codeString={code}
    language="html"
    fileName={fileName}
    lineNumbersToHide={lineNumbersToHide}
  />
);

export default SnippetToggler;
