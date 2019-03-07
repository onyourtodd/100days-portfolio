import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'

import styles from "./404.module.less"


const NotFoundPage = () => (
    <Layout>
      <h1 >NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <img src="tentacle.svg" alt="" className={styles.tentacle} />
      <Link to="/">← Back to home</Link>
    </Layout>
)

export default NotFoundPage
