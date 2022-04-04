"use strict";

const express = require("express");
const router  = express.Router();

const auth    = require("../middleware/auth");
const multer  = require("../middleware/multer");

const UserCtrl = require("../controller/UserCtrl");

router.get("/", UserCtrl.list);
router.post("/", UserCtrl.create);
router.post("/login", UserCtrl.login);
router.put("/:id", auth, multer, UserCtrl.update);
router.delete("/:id", auth, UserCtrl.delete);

module.exports = router;
