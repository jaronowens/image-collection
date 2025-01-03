/**
 * @type {import('gatsby').GatsbyConfig}
 */

// SFW TEST PATHS
const characters = "F:/Thunder/Pictures/Characters";


// NSFW PATHS
const sucess2022 = "F:/Thunder/Documents/Salvaged Downloads/success/2022";
const sucess2023 = "F:/Thunder/Documents/Salvaged Downloads/success/2023";
const sucess2024 = "F:/Thunder/Documents/Salvaged Downloads/success/2024";
const pinups = "F:/Thunder/Documents/Salvaged Downloads/pinups";

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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pinups",
        "path": sucess2024
      }
    },
  ]
};