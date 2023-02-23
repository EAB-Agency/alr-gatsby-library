import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Copy from './copy';

const Pre = (props) => {
  const { codeString, language, fileName } = props;
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
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })} style={style}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
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
