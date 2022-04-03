"use strict";

const express = require("express");
const router = express.Router();

const auth    = require("../middleware/auth");
const multer  = require("../middleware/multer");

const ThingCtrl = require("../controller/ThingCtrl");

router.get("/", ThingCtrl.listThing);
router.post("/", auth, multer, ThingCtrl.createThing);
router.get("/:id", ThingCtrl.readThing);
router.put("/:id", auth, multer, ThingCtrl.updateThing);
router.delete("/:id", auth, ThingCtrl.deleteThing);

module.exports = router;
