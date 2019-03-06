import React, { Component } from "react";
import aboutme from "./images/pic01.jpg";
import "./App.css";

class Aboutme extends Component {
  render() {
    return (
      <article className="item">
        <header>
          <a href="#">
            <img src={aboutme} alt="" />
          </a>
          <h3>about Me</h3>
        </header>
        <p>
          I am {this.props.name} from {this.props.city}
          {this.props.majer} from {this.props.majerP}
        </p>
        <ul className="actions" />
      </article>
    );
  }
}

export default Aboutme;
