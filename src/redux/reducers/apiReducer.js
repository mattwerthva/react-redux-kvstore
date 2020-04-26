import initialState from "./initialState";
import * as actions from "../actions/actions";

function actionTypeEndsInSuccess(type) {
	return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiReducer(
	callsInProgress = initialState.callsInProgress,
	action
) {
	if (action.type == actions.BEGIN_API_CALL) {
		return callsInProgress + 1;
	} else if (
		action.type === actions.API_CALL_ERROR ||
		actionTypeEndsInSuccess(action.type)
	) {
		return callsInProgress - 1;
	}

	return callsInProgress;
}
