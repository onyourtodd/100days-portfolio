import React from 'react'

const MainLinks = [
  {
    name: 'Latest Work',
    link: 'http://www.email-mentor.com/'
  }, {
    name: 'Contact',
    link: 'mailto:kron_todd@hotmail.com'
  }
]

const MainBody = ({ children }) => (
  <section className="main-wrapper">
    <h1>Hola</h1>
    <h2>I am Todd, a <span>front-end</span> <span id="js-rotating">developer, designer, consultant</span> from London, living in 🌞 Barcelona.</h2>
    <p> I have over 10 years experience in the digital space, across a variety of different departments, projects and disciplines. Right now, I am currently focused on creating web apps using the latest front end technologies.</p>
    <p>Including but not limited to; <i>HTML5</i>, <i>CSS3</i>, <i>Javascript</i>, <i>React</i>, <i>Redux</i>.</p>
    <ul>
      {MainLinks.map( link => (
        <li>
          <a href={link.link} target="_blank" rel="noopener noreferrer nofollow">{link.name} <span>&rarr;</span></a>
        </li>
      ))}
    </ul>
  </section>
)

export default MainBody
