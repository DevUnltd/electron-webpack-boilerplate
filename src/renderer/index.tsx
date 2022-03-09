import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

/**
 * Access "test" method from src/main/index.ts
 */
// const remote = require("@electron/remote");
// const tests = remote.getGlobal("test");
// console.log(tests());

/**
 * Access node modules
 */
// const fs = require("fs");
// console.log(fs);

ReactDOM.render(<App />, document.getElementById("root"));
