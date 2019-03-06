import React, { Component } from "react";
import mygold from "./images/pic02.jpg";
import "./App.css";

class Mygoals extends Component {
  render() {
    return (
      <article className="item">
        <header>
          <a href="#">
            <img src={mygold} alt="" />
          </a>
          <h3>My Goals</h3>
        </header>
        <p>
          Get more experience, Develop my programming ,learn more code Languages
          , having job, one day i well have my own a company.
        </p>
        <ul className="actions" />
      </article>
    );
  }
}

export default Mygoals;
