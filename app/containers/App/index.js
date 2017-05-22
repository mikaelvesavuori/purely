import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/actions";

import Main from "../../components/Main";

/*
const AppWrapper = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;

	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 1.25rem;
	line-height: 1.45;
`;
*/

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		value: state.counterReducer
	};
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		onIncrement: () => dispatch(actions.incrementAction()),
		onDecrement: () => dispatch(actions.decrementAction())
	};
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
