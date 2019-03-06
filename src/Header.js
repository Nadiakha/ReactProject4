import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header" class="alt">
          <div class="inner">
            <h1>{this.props.name}</h1>
          </div>
        </header>
        <section id="intro" className="main">
          <span className="icon fa-diamond major" />
          <h2>Welcome</h2>
          <p>
            <br />
            My name {this.props.name} welcome to my page <br />
          </p>
          <ul className="actions" />
        </section>
      </div>
    );
  }
}

export default Header;
