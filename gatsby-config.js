/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Mdreame`,
    description: `一个在现实中无处安身的人`,
    author: `xujiang`

  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- end -->`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },{
      resolve:`gatsby-source-mongodb`,
      options:{
        dbName:`music`,
        collection:["song","albumn","artist"],
        server:{
          address:`mdreame.life`,
          port: 27017,
        },
        auth:{
          user:`jiang`,
          password:`123456`
        },
        // extraParams: {  ssl: true, authSource: `admin`, retryWrites: true }
      },

    }
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `jiang's blog`,
    //     short_name: `一卒荷戟`,
    //     start_url: `/`,
    //     display: `standalone`,
    //     // icon: `src/images/favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-react-helmet`
  ],
}
