import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Aboutme from "./Aboutme";
import Mygoals from "./Mygoals";
import MyTS from "./MyTS";
import Like from "./Like";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <Header name={"Nadya Abdulrahman"} />
          <br />
          <section className="main items">
            <Aboutme
              name="Nadya Abdulrahman Alkhaaibari"
              city="Jeddah"
              majer="Computer Science
                graduate specialized Advanced computer programming"
              majerP="king Abdulaziz university"
            />
            <Mygoals />
            <MyTS />
            <Like />
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
