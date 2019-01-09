import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions'

import styles from "./404.module.less"


const NotFoundPage = () => (
  <PageTransition
    defaultStyle={{
      transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={500}
  >
    <Layout>
      <h1 >NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <img src="tentacle.svg" alt="" className={styles.tentacle} />
      <Link to="/">← Back to home</Link>
    </Layout>
  </PageTransition >
)

export default NotFoundPage
