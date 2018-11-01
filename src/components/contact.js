//import stuff
import React, { Component } from 'react';

import styles from "./contact.module.less"

class Contact extends Component {
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
        <h2 className={styles.textPopUp}>Contact me</h2>
        <p>
          Let's connect!<br />
          If you would like to get in contact regarding web dev then please use the form below.<br />
          Looking forward to hearing from you.
        </p>

        <form name="contact" method="POST" netlify>
          <p>
            <label>Email: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <div data-netlify-recaptcha></div>
          <p>
            <button type="submit" className={styles.bubblyButton}>Send</button>
          </p>
        </form>

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
              Contact<span>&nbsp;&rarr;</span>
            </li>
          </ul>
        </div>
        {this.state.showModal ? modal : ''}
      </div>
    );
  }
}

export default Contact;