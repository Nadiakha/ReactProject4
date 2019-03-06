import React, { Component } from "react";
import "./App.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="mailto:nadeia.ak@gmail.com" className="icon fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Untitled. Design:
          <a href="https://templated.co">TEMPLATED</a>. Images:
          <a href="https://unsplash.com">Unsplash</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
