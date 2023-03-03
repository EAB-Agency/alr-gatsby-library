/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Copy from './copy';

const Code = (props) => {
  const className = props.children.props.className || '';
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, '');
  const { file } = props.children.props;

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
              fileName={file}
              css={{
                position: `absolute`,
              }}
              content={code}
            />
            <Highlight
              {...defaultProps}
              code={code}
              language={language}
              theme={theme}
            >
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  <div>{`Language: ${language}`}</div>
                  <div>{file && `File: ${file}`}</div>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      <h2>hello world</h2>
                      <span className="line-number">{i + 1}</span>
                      {line.map((token, key) => (
                        <span
                          {...getTokenProps({
                            token,
                            key,
                          })}
                        />
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

export default Code;
