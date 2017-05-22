import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const AppWrapper = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;

	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 1.25rem;
	line-height: 1.45;
`;

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () => (
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
	</nav>
);

class AppContainer extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<AppWrapper>
						<Route exact path="/" component={Home}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/contact" component={Contact}></Route>
					</AppWrapper>
				</div>
			</Router>
		);
	}
}

export default connect()(AppContainer);
