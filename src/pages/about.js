import React from 'react'
import Layout from '../components/layout'
import About from "../components/about";
import PageTransition from 'gatsby-plugin-page-transitions';


export default () => (
    <PageTransition transitionTime={800}>
        <Layout>
            <About />
        </Layout>
    </PageTransition>
)
