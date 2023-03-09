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
      <div className=" center code-block-wrapper line-numbers">
        <button
          type="button"
          onClick={toggleCode}
          className="button-code code-toggle code-toggle-style"
        >
          {showCode ? 'Hide Code' : 'Show Code for Above'}
        </button>
        <div className="pre-wrapper">
          {showCode && (
            <>
              {codeFiles.map((file, i) => (
                <CodeHighlight key={i} {...file} />
              ))}
            </>
          )}
        </div>
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
  console.log('🚀 ~ file: Pre.jsx:43 ~ language:', language);
  const updatedCode = code.replace(/\bclassName\b/g, 'class');

  const shouldHideLine = calculateLinesToHide(lineNumbersToHide);
  const codeWithDeletedLinesTemp = deleteCodeLines(
    lineNumbersToDelete,
    updatedCode
  );
  const codeWithDeletedLines = deleteRocketLines(
    codeWithDeletedLinesTemp,
    language
  );

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
    if (strLineNumbers) {
      // const lineNumbers = rangeParser(strLineNumbers);
      // const lineNumbers = rangeParser(strLineNumbers, { expand: true });
      const lineNumbers = rangeParser(strLineNumbers.replace(/\s+/g, ''), {
        expand: true,
      });
      const lines = code.split('\n');
      const filteredLines = lines.filter(
        (line, i) => !lineNumbers.includes(i + 1)
      );
      return filteredLines.join('\n');
    }
  }
  return code;
};

const deleteRocketLines = (code, language) => {
  console.log(
    '🚀 ~ file: Pre.jsx:144 ~ deleteRocketLines ~ language:',
    language
  );
  if (language !== 'scss' && language !== 'css') {
    console.log('not scss or css');
    return code;
  }
  console.log('IS scss or css');

  const lines = code.split('\n');
  const filteredLines = lines.filter((line) => !line.trim().startsWith('.🚀'));
  const lastLine = filteredLines.pop();
  const withoutLastBracket = filteredLines.join('\n').replace(/\s+$/, '');
  return withoutLastBracket + (lastLine.trim() === '}' ? '' : lastLine);
};

export default CodeHighlightGroup;
