import React from 'react'

import Sun from '../components/sun'
import Logo from '../components/logo'
import MainBody from '../components/mainbody'
import Waves from '../components/waves'
import Layout from '../components/layout'
import Island from '../components/island'
import About from '../components/about'

const IndexPage = () => (
  
  <Layout>
    <Sun />
    <Logo />
    <About />
    <MainBody />
    <Island />
    <Waves />
  </Layout>
  
)


export default IndexPage
