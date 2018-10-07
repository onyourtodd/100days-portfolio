import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
//import './normalize.css'
import './main.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio of Todd Fraser' },
            { name: 'keywords', content: 'Portfolio, Web development, Web design, Barcelona' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          {children}
        </div>
        <Helmet>
          <script src="js/vendor/modernizr-3.6.0.min.js"></script>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
          <script src="https://www.google-analytics.com/analytics.js" async defer></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    $("#js-rotating").Morphext({
                      animation: "rotateIn",
                      complete: function () {
                          console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
                      }
                  });
                  `,
            }}
          />
        </Helmet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
