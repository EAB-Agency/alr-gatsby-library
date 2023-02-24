const path = require('path');
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
            sourceMap: true, // default is false
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        hooks: path.join(__dirname, 'src', 'hooks'),
        components: path.join(__dirname, 'src', 'components'),
        pages: path.join(__dirname, 'src', 'pages'),
        images: path.join(__dirname, 'src', 'assets', 'images'),
        fonts: path.join(__dirname, 'src', 'assets', 'fonts'),
        utils: path.join(__dirname, 'src', 'components', 'utils'),
        library: path.join(__dirname, 'src', 'styles', 'sass'),
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
};
