const fetch = require("isomorphic-fetch");

// production uses relative path.  Dev server needs a url since Dev runs on 3000 and server runs 8080
const baseUrl =  process.env.API_URL || '';

export function getItems() {
	return fetch(baseUrl + "/items/")
		.then(handleResponse)
		.catch(handleError);
}

export function getItem(key) {
	return fetch(baseUrl + "/item/" + key)
		.then(handleResponse)
		.catch(handleError);
}

export function setItem(item) {
	return fetch(baseUrl + "/item/", {
		method: "POST", // no distinction between Create vs Update
		headers: { "content-type": "application/json" },
		body: JSON.stringify(item),
	})
		.then(handleResponse)
		.catch(handleError);
}

async function handleResponse(response) {
	if (response.ok) return response.json();
	if (response.status === 400) {
		// returns a string error message, so parse as text instead of json.
		const error = await response.text();
		throw new Error(error);
	}
	throw new Error("Network response was not ok.");
}

export function handleError(error) {
	// eslint-disable-next-line no-console
	console.error("API failed. " + error);
	throw error;
}
