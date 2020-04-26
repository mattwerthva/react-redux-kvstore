
let _memoryDataStore = {
	key1: "React",
	key2: "Redux",
	key3: "KeyValue Store",
};

export function getItems() {
	return Promise.resolve({ ..._memoryDataStore });
}

export function getItem(key) {
	return Promise.resolve({ key: key, value: _memoryDataStore[key] });
}

export function setItem(item) {
	_memoryDataStore[item.key] = item.value;
	return Promise.resolve({ ...item });
}

export function handleError(error) {
	// eslint-disable-next-line no-console
	console.error("API failed. " + error);
	throw error;
}
