import React from "react";
import PropTypes from "prop-types";

import HeaderTitle from "./HeaderTitle";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HeaderTitle>
				{this.props.text}
			</HeaderTitle>
		);
	}
}

Header.propTypes = {
	text: PropTypes.string.isRequired
};

export default Header;
