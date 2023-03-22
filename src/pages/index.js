import * as React from 'react';
import '../styles/config/prism.css';
import '../styles/main.scss';

const IndexPage = () => (

  <main className="hello">
    <div className="page-title">
      <h1>ALR Layout Library</h1>
    </div>
    <div className="intro-wrap">
      <h2>Introduction</h2>
      <p>
        Welcome to the layout library, a place to browse pre-designed layouts to be used in partner work.
        The sections shown here are meant to be a starting point that allows you to spend less time coding tricky layouts
        and more time designing.
      </p>
    </div>
    <div className="intro-wrap">
      <h2>Let's Get Started</h2>
      <p>
        Navigate to different page elements using the menu in the top left
        corner. When you find a layout you want to use, click the "Show Code for
        Above" button and then copy the sass code to your files. Each block of sass code corresponds to an area in the foundation
        files you are meant to paste the code to. Ex, any "Header/Nav" code should be pasted in the header-nav sass partial.
      </p>
      <p>
        The code blocks will also show html, most of those blocks contain template html that is copied down for each Acquia instance.
        Some sections will note non-standard html with this graphic: <span class="custom-html">Custom HTML</span>&nbsp;
        Those html blocks must be pasted into Acquia in order to use the accompanying layout.
      </p>
    </div>
  </main>
);
export default IndexPage;

export const Head = () => <title>Home Page</title>;
