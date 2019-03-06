import React, { Component } from "react";
import "./App.css";
import mts from "./images/pic03.jpg";

class MyTS extends Component {
  render() {
    return (
      <article className="item">
        <header>
          <a href="#">
            <img src={mts} alt="" />
          </a>
          <h3> My Technical Skills </h3>
        </header>

        <ul className="actions">
          <p>
            After Effect, Photoshop and Illustrator for Photo editing
            <br />
            Final cut, iMove for Video editing <br />
            Java ,Php ,HTML, SQL, JavaScript and C++ for programming
            <br />
          </p>
        </ul>
      </article>
    );
  }
}

export default MyTS;
