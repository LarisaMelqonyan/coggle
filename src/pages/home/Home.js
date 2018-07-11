import React, { Component } from "react";

import "./Home.css";
import Pricing from "./pricing/Pricing";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main fullpage">
          <div className="middle">
            <div className="section">
              <img
                src="https://static.coggle.it/img/coggle-2x-white.png?_v=1530374966"
                alt="Coggle logo"
                className="logo"
              />
              <div className="tagline light">
                The clear way to share complex information.
              </div>
              <div className="video">
                <iframe
                  title="video"
                  width="448"
                  height="252"
                  src="https://www.youtube-nocookie.com/embed/iL40u0uNYa8?showinfo=0"
                  frameBorder="0"
                  allowFullScreen=""
                />
              </div>
              <div className="login-button-container">
                <a href="/login" className="login button outline">
                  <div className="signup-button-content">Sign Up Now</div>
                </a>
              </div>
              <p>
                <a href="/login">Already signed up? Log in here.</a>
              </p>
            </div>
          </div>
        </div>
        <Pricing />
      </div>
    );
  }
}

export default Home;
