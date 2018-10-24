//import stuff
import React, { Component } from 'react';

import styles from "./about.module.less"

class AboutModal extends Component {
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
      <div className={styles.modal}>
        <h2 className={styles.textPopUp}>About Me</h2>
        <p>La croix cloud bread listicle, kale chips pok pok kogi gochujang four loko pork belly vaporware craft beer artisan man braid shoreditch. Biodiesel pickled sartorial, fam craft beer umami seitan. Coloring book ennui seitan venmo, cornhole kale chips lyft meditation artisan fanny pack disrupt snackwave. Pok pok vexillologist fanny pack, YOLO deep v offal pour-over hexagon yuccie microdosing taxidermy brunch everyday carry 3 wolf moon.</p>
		    <p>Gluten-free selvage put a bird on it twee raw denim. Banh mi everyday carry PBR&amp;B, four loko raclette bushwick activated charcoal coloring book YOLO cray shabby chic pug sustainable succulents austin. Narwhal gentrify ethical lo-fi pok pok fashion axe. Chicharrones tacos XOXO austin.</p>
		    <p>Kitsch fanny pack readymade, paleo gochujang bushwick sartorial marfa kale chips mumblecore. Marfa intelligentsia taxidermy, slow-carb freegan locavore chartreuse bicycle rights migas offal jean shorts. Tote bag schlitz shoreditch migas subway tile. Food truck blue bottle tilde four dollar toast, whatever prism distillery shaman farm-to-table woke kitsch biodiesel 3 wolf moon raclette. Street art locavore ethical skateboard. Swag twee vape lumbersexual, four loko tofu pickled tote bag bespoke.</p>
        
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
                  More info<span>&rarr;</span>
                </li>
            </ul>
          </div>
          {this.state.showModal ? modal : ''} 
        </div>
    );
  }
}

export default AboutModal;