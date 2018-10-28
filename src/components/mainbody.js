import React from 'react'
import Contact from '../components/contact'
import About from '../components/about'

import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions'

import styles from "./mainBody.module.less"

const MainLinks = [
  {
    name: 'Latest Work →',
    link: 'http://www.email-mentor.com'
  }, {
    name: 'Quote generator →',
    link: '/quotes'
  }
]

const MainBody = ({ children }) => (
  <PageTransition>
    <section className={styles.mainWrapper}>
      <h1>Hola</h1>
      <h2>I am Todd, a <span>front-end</span> <span id="js-rotating">developer, designer, consultant</span> from London, living in 🌞 Barcelona.</h2>
      <p> I have over 10 years experience in the digital space, across a variety of different departments, projects and disciplines. Right now, I am currently focused on creating web apps using the latest front end technologies.</p>
      <p>Including but not limited to; <i>HTML5</i>, <i>CSS3</i>, <i>Javascript</i>, <i>React</i>, <i>Redux</i>.</p>
      <ul>
        <Contact />
        <About />
        {MainLinks.map(link => (
          <li>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  </PageTransition>
)

export default MainBody
