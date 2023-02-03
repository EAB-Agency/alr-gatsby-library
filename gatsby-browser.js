import React from 'react';
import Layout from './src/pages/layout';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock  from './src/components/CodeBlock';

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

const components = {
    pre: props => <div {...props} />,
    code: props => <CodeBlock {...props} />
};

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;