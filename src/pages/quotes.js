import React from 'react'

import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions'


const Quotes = () => (
  <PageTransition
    defaultStyle={{
      transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
      position: 'absolute',
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(to right, #ffeeee, #ddefbb)',
      textAlign: 'center',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={500}
  >
    <h1>Cool quotes here!</h1>

    <Link to="/">← Back to home</Link>
  </PageTransition>
)


export default Quotes
