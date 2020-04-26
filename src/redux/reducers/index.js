import { combineReducers } from "redux";
import kvStore from "./kvstoreReducer";
import callsInProgress from "./apiReducer";

const rootReducer = combineReducers({
	kvStore,
	callsInProgress,
});

export default rootReducer;
