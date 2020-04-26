import * as actions from "./actions";
import { beginApiCall, apiCallError } from "./apiActions";

import * as kvstoreApi from "../../api/kvstoreApi";

// action types
export function loadItemsSuccess(kvDict) {
	return { type: actions.LOAD_ITEMS_SUCCESS, kvDict };
}

export function getItemSuccess(kvItem) {
	return { type: actions.GET_ITEM_SUCCESS, kvItem };
}

export function setItemSuccess(kvItem) {
	return { type: actions.SET_ITEM_SUCCESS, kvItem };
}

export function updateItem(kvItem) {
	return { type: actions.UPDATE_ITEM, kvItem };
}

// async thunks
export function loadItems() {
	return function (dispatch) {
		dispatch(beginApiCall());
		return kvstoreApi
			.getItems()
			.then((items) => {
				dispatch(loadItemsSuccess(items));
			})
			.catch((error) => {
				console.log("Error: " + JSON.stringify(error));
				dispatch(apiCallError(error));
				throw error;
			});
	};
}

export function getItem(key) {
	return function (dispatch) {
		dispatch(beginApiCall());
		return kvstoreApi
			.getItem(key)
			.then((kvItem) => {
				dispatch(getItemSuccess(kvItem));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}

export function setItem(kvItem) {
	return function (dispatch) {
		dispatch(beginApiCall());
		return kvstoreApi
			.setItem(kvItem)
			.then((kvItem) => {
				dispatch(setItemSuccess(kvItem));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
}
