import React from "react";
import { Link } from "react-router-dom";

import NavLink from "components/NavLink";

const Links = () => (
	<NavLink>
		<Link to="/">Front</Link>
		<Link to="/buttons">Buttons</Link>
		<Link to="/counter">Counter</Link>
	</NavLink>
);

export default Links;
