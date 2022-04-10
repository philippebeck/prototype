"use strict";

const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const LinkCtrl = require("../controller/LinkCtrl");

router.get("/", LinkCtrl.list);
router.post("/", LinkCtrl.create);
router.put("/:id", LinkCtrl.update);
router.delete("/:id", LinkCtrl.delete);

module.exports = router;
