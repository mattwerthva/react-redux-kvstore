import * as kvstoreActions from "./kvstoreActions";
import * as actions from "./actions";

import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const initialState = {
	kvDict: {
		key1: "React",
		key2: "Redux",
		key3: "KeyValue Store",
	},
	kvItem: {
		key: "",
		value: "",
	},
};

describe("Async Actions", () => {
	describe("Load Items Thunk", () => {
		it("should create LOAD_ITEMS_SUCCESS when loading kvStore.", () => {
			const expectedActions = [
				{ type: actions.BEGIN_API_CALL },
				{
					type: actions.LOAD_ITEMS_SUCCESS,
					kvDict: initialState.kvDict,
				},
			];

			const store = mockStore({ courses: [] });
			return store.dispatch(kvstoreActions.loadItems()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});

	describe("GET Item Thunk", () => {
		it("should Get GET_ITEM_SUCCESS", () => {
			const expectedActions = [
				{ type: actions.BEGIN_API_CALL },
				{
					type: actions.GET_ITEM_SUCCESS,
					kvItem: { key: "key1", value: "React" },
				},
			];

			const store = mockStore({ courses: [] });
			return store.dispatch(kvstoreActions.getItem("key1")).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});

	describe("SET Item Thunk", () => {
		it("should Set SET_ITEM_SUCCESS", () => {
			const updatedItem = { key: "key1", value: "updated" };
			const expectedActions = [
				{ type: actions.BEGIN_API_CALL },
				{
					type: actions.SET_ITEM_SUCCESS,
					kvItem: updatedItem,
				},
			];

			const store = mockStore({ courses: [] });
			return store
				.dispatch(kvstoreActions.setItem(updatedItem))
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				});
		});
	});
});
