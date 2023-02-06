import * as React from 'react';
import Testimonial from '../components/social-proof/testimonial';


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
