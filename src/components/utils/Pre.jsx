import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import theme from 'prism-react-renderer/themes/nightOwl';
import Copy from './copy';
import './code.css';

const CodeHighlightGroup = ({ codeFiles }) => {
  // create a show/hide button for the code block
  const [showCode, setShowCode] = React.useState(false);
  const toggleCode = () => setShowCode(!showCode);
  return (
    <div className="code-block">
      <div className="code-block-wrapper line-numbers">
        <button
          type="button"
          onClick={toggleCode}
          className="button-code code-toggle code-toggle-style"
        >
          {showCode ? 'Hide Code' : 'Show Code for Above'}
        </button>
        {showCode && (
          <>
            {codeFiles.map((file, i) => (
              <CodeHighlight key={i} {...file} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const CodeHighlight = ({
  fileName,
  code,
  language,
  lineNumbersToHide,
  lineNumbersToDelete,
}) => {
  const shouldHideLine = calculateLinesToHide(lineNumbersToHide);
  const codeWithDeletedLines = deleteCodeLines(lineNumbersToDelete, code);

  return (
    <>
      <Copy
        css={{
          position: `absolute`,
        }}
        content={codeWithDeletedLines || code}
        fileName={fileName}
        duration={2000}
      >
        {fileName}
      </Copy>

      <Highlight
        {...defaultProps}
        code={codeWithDeletedLines || code}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: '2rem',
              position: 'relative',
              overflowX: 'scroll',
            }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              if (shouldHideLine(i)) {
                lineProps.className = `${lineProps.className} hide-line`;
              }
              return (
                <div
                  {...getLineProps({ line, key: i })}
                  {...lineProps}
                  style={style}
                  key={i}
                >
                  <span className="line-number">{i + 1}</span>
                  <span className="line-content">
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </>
  );
};

const calculateLinesToHide = (lineNumbersToHighlight) => {
  const RE = /([\d,-]+)/;
  if (RE.test(lineNumbersToHighlight)) {
    const strlineNumbers = RE.exec(lineNumbersToHighlight)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (i) => lineNumbers.includes(i + 1);
  }
  return () => false;
};
const deleteCodeLines = (lineNumbersToDelete, code) => {
  const RE = /([\d,-]+)/;
  if (RE.test(lineNumbersToDelete)) {
    const strLineNumbers = RE.exec(lineNumbersToDelete)[1];
    const lineNumbers = rangeParser(strLineNumbers);
    const lines = code.split('\n');
    const filteredLines = lines.filter(
      (line, i) => !lineNumbers.includes(i + 1)
    );
    return filteredLines.join('\n');
  }
  return code;
};

export default CodeHighlightGroup;
