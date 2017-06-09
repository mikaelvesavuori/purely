// Import dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { BrowserRouter, Route, browserHistory } from "react-router-dom";
import PropTypes from "prop-types";

// Import main app container
import AppContainer from "./containers/App/index";

// Import the SCSS if you'd rather use PostCSS/CSSnext/Sass
//import "./styles/main.scss";

// Setup Redux reducers
import rootReducer from "./reducers/index";

// Setup Redux store
import store from "./store/index";

// Setup Redux actions
import * as actions from "./actions/actions"; // Potentially redundant

// Setup root element to render
const Root = ({store}) => (
	<Provider store={store}>
		<BrowserRouter history={browserHistory}>
			<Route path="/" component={AppContainer} />
		</BrowserRouter>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

// Get HTML
require("file-loader!./index.html");

// Render application
ReactDOM.render(
	<Root store={store} />, document.querySelector("#app")
);
