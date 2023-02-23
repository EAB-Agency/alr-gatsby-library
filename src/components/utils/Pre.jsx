import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import theme from 'prism-react-renderer/themes/nightOwl';
import Copy from './copy';
import './code.css';

const calculateLinesToHide = (lineNumbersToHighlight) => {
  const RE = /([\d,-]+)/;
  if (RE.test(lineNumbersToHighlight)) {
    const strlineNumbers = RE.exec(lineNumbersToHighlight)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (i) => lineNumbers.includes(i + 1);
  }
  return () => false;
};

const Pre = (props) => {
  const { codeString, language, fileName, lineNumbersToHide } = props;
  const shouldHideLine = calculateLinesToHide(lineNumbersToHide);

  // create a show/hide button for the code block
  const [showCode, setShowCode] = React.useState(false);
  const toggleCode = () => setShowCode(!showCode);
  return (
    <div className="code-block">
      <div className="code-block-wrapper">
        <button
          type="button"
          onClick={toggleCode}
          className="button-code code-toggle code-toggle-style"
        >
          {showCode ? 'Hide Code' : 'Show Code for Above'}
        </button>
        {showCode && (
          <>
            <Copy
              css={{
                position: `absolute`,
              }}
              content={codeString}
              fileName={fileName}
              duration={2000}
            />
            <Highlight
              {...defaultProps}
              code={codeString}
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
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    );
                  })}
                </pre>
              )}
            </Highlight>
          </>
        )}
      </div>
    </div>
  );
};

export default Pre;
