import * as React from 'react';
import Testimonial from 'components/social-proof/Testimonial';
import './prism.css';
import './main.css';

const IndexPage = () => {
  // TODO: build this page out as the home page
  return (
    <main className="hello">
      <Testimonial />
      <h1>Hello world!</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
