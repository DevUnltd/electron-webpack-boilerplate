import classnames from "classnames";
import * as React from "react";
import "../styles/Home.css";

import logo from "../images/logo.svg";
import gh from "../images/gh.png";

const Home = () => {
  return (
    <div className={classnames("page")}>
      <img src={logo} width={400} />
      <div>
        <ul style={{ marginTop: 40 }} className={classnames("links")}>
          <li>
            <a
              target="_blank"
              href="https://github.com/hodgef/electron-webpack-boilerplate"
            >
              <img src={gh} height={20} /> hodgef/electron-webpack-boilerplate
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
