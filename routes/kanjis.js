var express = require('express');
var router = express.Router();
var kanjisController = require("../controllers/kanjisController");


router.get("/add", kanjisController.add);


module.exports = router;
