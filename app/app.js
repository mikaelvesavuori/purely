import React from "react";
import ReactDOM from "react-dom";
/*
import { Provider } from "react-redux";
import { applyRouterMiddleware, Router, browserHistory } from "react-router";
*/
import App from "./containers/App";
//import configureStore from "./store";
//import createRoutes from "./routes";

import "./main.scss";

require("file-loader!./index.html");

ReactDOM.render(
	<App />, document.querySelector("#app")
);
