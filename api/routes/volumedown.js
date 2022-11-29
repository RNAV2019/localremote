const express = require("express");
const loudness = require("loudness");
const router = express.Router();

router.get("/", async (req, res) => {
	var currVolume = await loudness.getVolume();
	currVolume = currVolume - (currVolume % 10);
	if (currVolume - 10 >= 0) {
		loudness.setVolume(currVolume - 10);
		res.send(
			`The volume has been decreased from ${currVolume} => ${currVolume - 10}`
		);
		console.log(
			`The volume has been decreased from ${currVolume} => ${currVolume - 10}`
		);
	} else if (currVolume == 0) {
		res.send(`The volume is ${currVolume}`);
		console.log(`The volume is ${currVolume}`);
	} else {
		res.send("There was an error in decreasing the volume...");
		console.log("There was an error in decreasing the volume...");
	}
});

module.exports = router;
