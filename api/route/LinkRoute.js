"use strict";

const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const LinkCtrl = require("../controller/LinkCtrl");

router.get("/", LinkCtrl.listLinks);
router.post("/", LinkCtrl.createLink);
router.put("/:id", auth, LinkCtrl.updateLink);
router.delete("/:id", auth, LinkCtrl.deleteLink);

module.exports = router;
