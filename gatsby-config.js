/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ALR Layout Library - Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};