import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";

// Get views
import FrontView from "containers/FrontView/";
import ButtonsView from "containers/ButtonsView/";
import CounterView from "containers/CounterView/";

import Links from "components/Links";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={FrontView}></Route>
					<Route path="/buttons" component={ButtonsView}></Route>
					<Route path="/counter" component={CounterView}></Route>
					<Links />
				</div>
			</Router>
		);
	}
}

export default connect()(Routes);
