// gatsby-config.js
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Matyas Iras`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matyas Iras Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        // point this at your new favicon in static/
        icon: `static/MI-icon.png`,
      },
    },
    // …the rest of your plugins
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: { /* … */ },
    },
  ],
}
