import React from "react";

// Import components
import Header from "components/Header/";
import Button from "components/Button/";

import sidebar from "containers/Sidebar/";

const FrontView = () =>
	<div>
		<h1>Front</h1>

		<Header text="Header" />
		<Button text="Button 1"/>
		<Button small text="Button 2" />

		<sidebar text="Sidebar"/>
	</div>;

export default FrontView;
