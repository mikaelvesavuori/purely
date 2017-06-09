// Import dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

// Import main app container
import App from "./containers/App/index";

// Setup Redux store
import store from "./store/index";

// Setup root element to render
const Root = ({store}) => (
	<Provider store={store}>
		<App />
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
