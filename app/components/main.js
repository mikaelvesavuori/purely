import React from "react";
import ReactDOM from "react-dom";

// Import containers
import CounterContainer from "./../containers/Counter/index";
import RoutesContainer from "./../containers/Routes/index";

// Import components
import Header from "./Header/index";
import Button from "./Button/index";

class Main extends React.Component {
	render() {
		return (
			<div>
				<Header text="Some example text here" />
				<Button />
				<CounterContainer />
				<RoutesContainer />
			</div>
		);
	}
}

export default Main;
