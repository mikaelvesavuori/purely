import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import HeaderTitle from "./HeaderTitle";

export default class Header extends React.Component {
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
	text: PropTypes.string.isRequired,
	children: PropTypes.node
};
