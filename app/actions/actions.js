import * as types from "./actionTypes";

export function incrementAction() {
	return {
		type: types.INCREMENT
	};
}

export function decrementAction() {
	return {
		type: types.DECREMENT
	};
}
