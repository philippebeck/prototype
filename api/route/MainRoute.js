"use strict";

const express = require("express");
const router = express.Router();

const auth    = require("../middleware/auth");
const multer  = require("../middleware/multer");

const MainCtrl = require("../controller/MainCtrl");

router.get("/", auth, MainCtrl.list);
router.post("/", auth, multer, MainCtrl.create);
router.get("/:id", auth, MainCtrl.read);
router.put("/:id", auth, multer, MainCtrl.update);
router.delete("/:id", auth, MainCtrl.delete);

module.exports = router;
