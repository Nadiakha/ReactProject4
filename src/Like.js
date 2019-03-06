import React, { Component } from "react";
import "./App.css";
import spt from "./images/pic04.jpg";

class Like extends Component {
  render() {
    return (
      <article className="item">
        <header>
          <a href="#">
            <img src={spt} alt="" />
          </a>
          <h3>What a like to do</h3>
        </header>

        <p>
          I love spand my time Coding, Play vidoe in (PS4 ,PC), Read Books,
          Cooking, Edit Vidoes and Photo and Photography .
        </p>
      </article>
    );
  }
}

export default Like;
