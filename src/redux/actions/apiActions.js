import * as actions from "./actions";

export function beginApiCall() {
	return { type: actions.BEGIN_API_CALL };
}

export function apiCallError() {
	return { type: actions.API_CALL_ERROR };
}
