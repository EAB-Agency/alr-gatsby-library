import * as React from 'react';
import '../styles/config/prism.css';
import '../styles/main.scss';

const IndexPage = () => (
  // TODO: build this page out as the home page
  <main className="hello">
    <div className="page-title">
      <h1>ALR Layout Library</h1>
    </div>
    <div className="intro-wrap">
      <h2>Let's Get Started</h2>
      <p>
        Navigate to different page elements using the menu in the top left
        corner. When you find a layout you want to use, click the "Show Code for
        Above" button and then copy the code to your files.
      </p>
    </div>
    {/* <Testimonial /> */}
  </main>
);
export default IndexPage;

export const Head = () => <title>Home Page</title>;
