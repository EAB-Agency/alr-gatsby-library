import React from 'react';
import { wrapRootElement as wrap } from './src/components/wrap-root-element';
import Layout from './src/pages/layout';

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const wrapRootElement = wrap;
