require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Dippy`,
    description: `High quality, custom-designed shirts, hats, and hoodies. Our clothing is made from the softest fabric we could find so that you can feel amazing when you put it on`,
    author: `Robert Behm`,
    keywords: [
      "clothing",
      "hats",
      "shirts",
      "hoodies",
      "fishing",
      "fishing tshirts",
      "fishing hoodie",
      "fishing hat",
      "funny tshirts",
      "funny clothing",
    ],
    siteUrl: "https://dippytees.com",
    twitterUsername: "@dippytees",
    defaultImage: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://dippytees.com",
        sitemap: "https://dippytees.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Philosopher:700:latin",
            "Montserrat:700,600,500,400,300:latin",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI_URL,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`product`, `category`, `variant`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: "blurred",
          breakpoints: [300, 600, 960, 1280, 1920],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dippy`,
        short_name: `Dippy`,
        start_url: `/`,
        background_color: `#99B898`,
        theme_color: `#99B898`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
