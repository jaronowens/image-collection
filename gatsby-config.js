/**
 * @type {import('gatsby').GatsbyConfig}
 */

const testPath = "F:/Thunder/Documents/Salvaged Downloads/success/2018";

module.exports = {
  siteMetadata: {
    title: `Image Collection`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "images",
    //     "path": "./src/images/sample"
    //   },
    //   __key: "images"
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "pinups",
    //     "path": "F:/Thunder/Documents/Salvaged Downloads/pinups"
    //   }
    // }
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pinups",
        "path": testPath
      }
    },
  ]
};