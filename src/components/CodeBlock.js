// src/components/CodeBlock.jsx
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Prism from 'prism-react-renderer/prism';

import vsDark from 'prism-react-renderer/themes/vsDark';
import normalize from './normalize';
import Copy from './copy';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const LiveComponent = ({ code }) => {
  return (
    <LiveProvider code={code}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  );
};

(typeof global !== 'undefined' ? global : window).Prism = Prism;

const getParams = (name = ``) => {
  const parts = name.split(`:`);
  const language = parts[0];
  const params = parts.slice(1).reduce((merged, part) => {
    const [key = ``, value = ``] = part.split(`=`);
    merged[key] = value;
    return merged;
  }, {});

  return {
    language,
    params,
  };
};

const CodeBlock = ({ children, className }) => {
  // create a show/hide button for the code block
  const [showCode, setShowCode] = React.useState(false);
  const toggleCode = () => setShowCode(!showCode);

  const {
    language,
    params: { title = ``, live },
  } = getParams(className);
  const [content, highlights] = normalize(
    children.props && children.props.children
      ? children.props.children
      : children,
    className
  );

  return (
    <>
      {live ? (
        <>
          {title && (
            <div className="gatsby-highlight-header">
              <div className="gatsby-code-title">{title}</div>
            </div>
          )}
          <LiveComponent code={content} />
          <Copy
            fileName={title}
            css={{
              position: `absolute`,
            }}
            content={content}
          />
        </>
      ) : (
        <>
          <button onClick={toggleCode} className="code-toggle">
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode && (
            <>
              {title && (
                <div className="gatsby-highlight-header">
                  <div className="gatsby-code-title">{title}</div>
                </div>
              )}
              <Copy
                fileName={title}
                css={{
                  position: `absolute`,
                }}
                content={content}
              />

              <Highlight
                {...defaultProps}
                code={content}
                language={language}
                theme={vsDark}
              >
                {({ tokens, getLineProps, getTokenProps }) => (
                  <div className="gatsby-highlight">
                    <pre className={`language-${language}`}>
                      {tokens.map((line, i) => {
                        const lineProps = getLineProps({ line, key: i });
                        const className = [lineProps.className]
                          .concat(highlights[i] && `gatsby-highlight-code-line`)
                          .filter(Boolean)
                          .join(` `);
                        return (
                          <div
                            key={i}
                            {...Object.assign({}, lineProps, {
                              className,
                            })}
                          >
                            {line.map((token, key) => (
                              <span
                                key={key}
                                {...getTokenProps({ token, key })}
                              />
                            ))}
                          </div>
                        );
                      })}
                    </pre>
                  </div>
                )}
              </Highlight>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CodeBlock;
