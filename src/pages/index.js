import React from 'react'

import Sun from '../components/sun'
import Logo from '../components/logo'
import MainBody from '../components/mainbody'
import Waves from '../components/waves'
import Layout from '../components/layout'
import Island from '../components/island'

import PageTransition from 'gatsby-plugin-page-transitions'

const IndexPage = () => (

  <Layout>
    <Sun />
    <Logo />
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
      <MainBody />
    </PageTransition>
    <Island />
    <Waves />
  </Layout>
)

export default IndexPage
