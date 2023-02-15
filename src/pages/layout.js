import React from 'react';
import Nav from '../components/utils/Nav';

const Layout = ({ children }) => (
	<div className="wrapper">
		<Nav />
		{children}
	</div>
);

export default Layout;
