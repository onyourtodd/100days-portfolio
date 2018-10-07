import React from 'react'

import Sun from '../components/sun'
import Logo from '../components/logo'
import MainBody from '../components/mainbody'
import Waves from '../components/waves'
import Layout from '../components/layout'
import Fishes from '../components/fishes'
import Island from '../components/island'

const IndexPage = () => (
  
  <Layout>
    <Sun />
    <Logo />
    <MainBody />
    <Island />
    <Waves>
      <Fishes />
    </Waves>
  </Layout>
)


export default IndexPage
