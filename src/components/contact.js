//import stuff
import React, { Component } from 'react';

import './contact.less'

class Contact extends Component {
  constructor(props) {
      super(props);
      this.state = {showModal: false};
      this.handleClick = this.handleClick.bind(this);
    }

   handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }
  
  render() {
    const modal = (
      <div className="modal">
        <h2 className="text-pop-up-top">Contact me</h2>
        <p>
          Let's connect!<br />
          If you would like to get in contact regarding web dev then please use the form below.<br />
          Looking forward to hearing from you.
        </p>

        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input name="name" placeholder="Your Name" type="text" />
          <button>Send</button>
        </form>
        
        <div className="exit" onClick={this.handleClick}>
          &#x02297;
        </div>
        
      </div>
    );
    
    return (
        <div className="about">
          <div className='button' onClick={this.handleClick}>
            <ul>
                <li>
                  Contact<span>&rarr;</span>
                </li>
            </ul>
          </div>
          {this.state.showModal ? modal : ''} 
        </div>
    );
  }
}

export default Contact;