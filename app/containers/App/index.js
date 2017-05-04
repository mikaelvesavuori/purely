import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const AppWrapper = styled.div`
	width: 100%;
	height: 500px;
	display: inline-block;
	padding: 2rem;
	color: rgb(0, 0, 0);
`;

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AppWrapper>
					Hello from React!
				</AppWrapper>
			</div>
		)
	}
}

App.propTypes = {
	children: React.PropTypes.node,
};
