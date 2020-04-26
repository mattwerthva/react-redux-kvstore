import * as actions from "../actions/actions";
import initialState from "./initialState";

export default function kvstoreReducer(kvStore = initialState.kvStore, action) {
	let dict = {};

	switch (action.type) {
		case actions.LOAD_ITEMS_SUCCESS:
			return { ...kvStore, kvDict: action.kvDict };
		case actions.GET_ITEM_SUCCESS:
			// dict didnt change, just set currentKey
			return { ...kvStore, kvItem: action.kvItem };
		case actions.SET_ITEM_SUCCESS:
			// clone dict
			dict = { ...kvStore.kvDict };
			// add or update item within dict
			dict[action.kvItem.key] = action.kvItem.value;
			// update store with revised dict and current item
			return {
				...kvStore,
				kvDict: dict,
				kvItem: { ...action.kvItem },
			};
		case actions.UPDATE_ITEM:
			// when user types
			return { ...kvStore, kvItem: action.kvItem };

		default:
			return kvStore;
	}
}
