/**
 * @type {import('gatsby').GatsbyConfig}
 */

const testPath = "F:/Thunder/Documents/Salvaged Downloads/Rave in the Grave";

module.exports = {
  siteMetadata: {
    title: `Image Collection`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
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