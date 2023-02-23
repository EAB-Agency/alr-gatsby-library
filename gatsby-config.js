const path = require('path')
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ALR Layout Library - Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-mdx',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src')],
        },
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src', 'components'),
        styles: path.join(__dirname, 'src', 'images'),
        pages: path.join(__dirname, 'src', 'pages'),
        images: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-code-titles',
          'gatsby-remark-code-buttons',
          'gatsby-remark-embed-figma',
        ],
      },
    },
  ],
}
