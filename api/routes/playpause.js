const express = require("express");
const robot = require("robotjs");
const router = express.Router();

router.get("/", (req, res) => {
	robot.keyTap("audio_play");
	res.send("Played/Paused the media");
	console.log("Played/Paused the media");
});

module.exports = router;
