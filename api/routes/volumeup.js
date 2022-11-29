const express = require("express");
const loudness = require("loudness");
const router = express.Router();

router.get("/", async (req, res, next) => {
	var currVolume = await loudness.getVolume();
	currVolume = currVolume - (currVolume % 10);
	if (currVolume + 10 <= 100) {
		loudness.setVolume(currVolume + 10);
		res.send(
			`The volume has been increased from ${currVolume} => ${currVolume + 10}`
		);
		console.log(
			`The volume has been increased from ${currVolume} => ${currVolume + 10}`
		);
	} else if (currVolume == 100) {
		res.send(`The volume is ${currVolume}`);
		console.log(`The volume is ${currVolume}`);
	} else {
		res.send("There was an error in increasing the volume...");
		console.log("There was an error in increasing the volume...");
	}
});

module.exports = router;
