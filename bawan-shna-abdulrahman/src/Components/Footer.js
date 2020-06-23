import React, { Component } from "react";
import "./Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <small style={{ marginRight: "20px" }}>
          Developed with ❤ by bawan-shna-abdulrahman
        </small>
        <a href="https://github.com/shna-rafeeq" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  }
}

export default Footer;
