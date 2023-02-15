import * as React from 'react';
import Testimonial from '../components/social-proof/Testimonial';
import '../styles/config/prism.css';
import '../styles/main.scss';

const IndexPage = () => (
	// TODO: build this page out as the home page
	<main className="hello">
		<div className="page-title">
			<h1>Root Page</h1>
		</div>
		<div className="intro-wrap">
			<h2>About Guide</h2>
			<p>Some descriptive copy about the layout...</p>
		</div>
		<Testimonial />
	</main>
);
export default IndexPage;

export const Head = () => <title>Home Page</title>;
