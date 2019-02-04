import React, { Component } from 'react';
import logo from './logo.svg';
import './Filmmaker.css';

class Filmmaker extends Component {
  render() {
    return (
      <div className="Filmmaker">
        <header className="Filmmaker-header">
          <img src={logo} className="Filmmaker-logo" alt="logo" />
          <a
            className="Filmmaker-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Filmmaker's Friend
          </a>
        </header>
      </div>
    );
  }
}

export default Filmmaker;
