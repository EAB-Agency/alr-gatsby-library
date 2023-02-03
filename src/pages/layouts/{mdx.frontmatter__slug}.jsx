import * as React from 'react';
import { graphql } from 'gatsby';

export default function BlogPostTemplate({
  data, children // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter } = mdx;
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        {children}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export function Head() {
  return (
    <script src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
  );
}