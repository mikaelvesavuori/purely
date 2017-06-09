import React from "react";
import { connect } from "react-redux";

import * as actions from "actions/actions";
import Counter from "components/Counter/";

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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
