import React, { Component } from 'react';
import styles from "./about.module.less"

class AboutModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  render() {
    const modal = (
      <div className={styles.modal}>
        <h2 className={styles.textPopUp}>About Me</h2>
        <p>I am fanatical about all aspects of web development. From UI to optimization for production, I love it all. Give me a problem and I will solve it.</p>

          <p>If you would like to work together on a project, or just want to talk tech then please shoot me a message. I would love to hear from you!</p>
        <br />

        <div className={styles.exit} onClick={this.handleClick}>
          &#x02297;
        </div>

      </div>
    );

    return (
      <div className={styles.about}>
        <div className={styles.button} onClick={this.handleClick}>
          <ul>
            <li>
              More info<span>&nbsp;&rarr;</span>
            </li>
          </ul>
        </div>
        {this.state.showModal ? modal : ''}
      </div>
    );
  }
}

export default AboutModal;