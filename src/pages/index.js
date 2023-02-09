import * as React from 'react';
import Testimonial from 'components/social-proof/Testimonial';
import './main.css'
import './prism.css';

const IndexPage = () => {
  return (
    <main className="hello">
      <Testimonial />
      <h1>Hello world!</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
