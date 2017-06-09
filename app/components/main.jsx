import React from "react";
import ReactDOM from "react-dom";

// Import containers
import Routes from "routes/index";

// Import the SCSS if you'd rather use PostCSS/CSSnext/Sass
//import "./../styles/main.scss";

import AppWrapper from "./AppWrapper";
import Header from "components/Header";

class Main extends React.Component {
	render() {
		return (
			<AppWrapper>
				<Header text="Header" />
				<Routes />
			</AppWrapper>
		);
	}
}

export default Main;
