
declare var require: any;

import "!style!css!../css/styles.css";
import "jquery";
import "bootstrap-webpack";
import "file?name=[name].[ext]!../index.html";
import "./global";

import * as React from "react";
import * as ReactDOM  from "react-dom";
import {Game} from "./game";

ReactDOM.render(<Game />, document.getElementById("root"));