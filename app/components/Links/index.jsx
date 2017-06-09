import React from "react";
import { Link } from "react-router-dom";

const Links = () => (
	<nav>
		<Link to="/">Front</Link>
		<Link to="/buttons">Buttons</Link>
		<Link to="/counter">Counter</Link>
	</nav>
);

export default Links;
