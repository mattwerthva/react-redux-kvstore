const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let port = process.env.PORT || 8080;
let app = express();

/**
 * Basic in-memory Key Value datastore.
 * Utilize a simple js object as dictionary to access properties fast
 * and to handle Create or Update with the same code
 */
let _memoryDataStore = {
	key1: "React",
	key2: "Redux",
	key3: "KeyValue Store",
};

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.listen(port, console.info("Server running, listening on port ", port));

/**
 * serve static client app files
 */
app.use(express.static("build"));

/**
 * retrieve all key/value pairs in datastore (a json object with key/values)
 */
app.get("/items/", async (req, res) => {
	console.log("get /items/");

	res.status(200).send(_memoryDataStore);
});

/**
 * Get a single item by key
 */
app.get("/item/:key", async (req, res) => {
	console.log("get /item/");

	let key = req.params.key;
	if (!key) {
		res.status(401).send("Bad Data!");
		return;
	}
	console.log("key: " + key);

	res.status(200).send({ key: key, value: _memoryDataStore[key] });
});

/**
 * Create or Update a Key-Value pair
 */
app.post("/item/", async (req, res) => {
	console.log("set /item/");
	let item = req.body;
	if (!item || !item.key) {
		res.status(401).send("Bad Data!");
		return;
	}
	console.log("item: " + JSON.stringify(item));
	_memoryDataStore[item.key] = item.value || "";

	res.status(200).send(item);
});
