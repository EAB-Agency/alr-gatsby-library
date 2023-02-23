import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Code from './code';

const components = {
  pre: (props) => <Code {...props} />,
  // eslint-disable-next-line react/jsx-no-useless-fragment
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
