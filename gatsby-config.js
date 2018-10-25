module.exports = {
  siteMetadata: {
    title: 'Todd Fraser - An experimental portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-less',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        // This is the field under which it's accessible
        fieldName: "swapi",
        // URL to query from
        url: "https://api.graphcms.com/simple/v1/swapi",
      },
    },
    'gatsby-plugin-page-transitions',
  ],
  
}
