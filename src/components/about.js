import React, { Component } from 'react';
import styles from "./about.module.less"
import { Link } from 'gatsby'

const About = ({ children }) => (
    <div className={styles.modal}>
        <h2 className={styles.textPopUp}>About Me</h2>
        <p>I am fanatical about all aspects of web development. From UI to optimization for production, I love it all. Give me a problem and I will solve it.</p>

        <p>If you would like to work together on a project, or just want to talk tech then please shoot me a message. I would love to hear from you!</p>

        <p>* This site is currently a living experimental portfolio and is being constantly updated to test new tech.</p>
        <br />

        <div className={styles.exit}>
            <Link to="/">&#x02297;</Link>
        </div>
    </div>
);

export default About