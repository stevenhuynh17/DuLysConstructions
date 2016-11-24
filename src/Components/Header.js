import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className="Name">
            <h1>Du Lys Constructions</h1>
          </div>
          <div className="MenuBar">
            <ul className="MenuOptions">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#home">Services</a></li>
              <li><a href="#home">Home</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;