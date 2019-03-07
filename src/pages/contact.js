import React from 'react'
import Layout from '../components/layout'
import Contact from "../components/contact";
import PageTransition from 'gatsby-plugin-page-transitions';

const ContactPage = () => (
    <PageTransition transitionTime={800}>
        <Layout>
            <Contact />
        </Layout>
    </PageTransition>
);

export default ContactPage
