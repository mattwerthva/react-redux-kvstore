import kvstoreReducer from "./kvstoreReducer";
import * as actions from "../actions/kvstoreActions";

it("should LOAD all existing items.", () => {
	// setup
	const initialState = {
		kvDict: {},
		kvItem: {
			key: "",
			value: "",
		},
	};

	const serverDict = {
		key1: "A",
		key2: "B",
		key3: "C",
	};

	const action = actions.loadItemsSuccess(serverDict);

	// act
	const newState = kvstoreReducer(initialState, action);

	// assert
	expect(Object.keys(newState.kvDict).length).toEqual(3);
	expect(newState.kvDict.key1).toEqual("A");
	expect(newState.kvDict.key2).toEqual("B");
	expect(newState.kvDict.key3).toEqual("C");
});

it("should GET and existing item by key.", () => {
	// setup
	const initialState = {
		kvDict: {
			key1: "A",
			key2: "B",
			key3: "C",
		},
		kvItem: {
			key: "",
			value: "",
		},
	};

	const existingItem = {
		key: "key1",
		value: "A",
	};

	const action = actions.getItemSuccess(existingItem);

	// act
	const newState = kvstoreReducer(initialState, action);

	// assert
	expect(Object.keys(newState.kvDict).length).toEqual(3);
	expect(newState.kvDict.key1).toEqual("A");
	expect(newState.kvItem.key).toEqual("key1");
	expect(newState.kvItem.value).toEqual("A");
});

it("should add item when SET is passed a new key.", () => {
	// setup
	const initialState = {
		kvDict: {
			key1: "A",
			key2: "B",
			key3: "C",
		},
		kvItem: {
			key: "",
			value: "",
		},
	};

	const newItem = {
		key: "newKey",
		value: "newValue",
	};

	const action = actions.setItemSuccess(newItem);

	// act
	const newState = kvstoreReducer(initialState, action);

	// assert
	expect(Object.keys(newState.kvDict).length).toEqual(4);
	expect(newState.kvDict.newKey).toEqual("newValue");
});

it("should update an existing item when SET is passed an existing key.", () => {
	// setup
	const initialState = {
		kvDict: {
			key1: "A",
			key2: "B",
			key3: "C",
		},
		kvItem: {
			key: "",
			value: "",
		},
	};

	const updateItem = {
		key: "key1",
		value: "updated",
	};

	const action = actions.setItemSuccess(updateItem);

	// act
	const newState = kvstoreReducer(initialState, action);

	// assert
	expect(Object.keys(newState.kvDict).length).toEqual(3);
	expect(newState.kvDict[updateItem.key]).toEqual(updateItem.value);
	expect(newState.kvItem.key).toEqual(updateItem.key);
	expect(newState.kvItem.value).toEqual(updateItem.value);
});
