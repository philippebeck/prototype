"use strict";

const express = require("express");
const router  = express.Router();

const auth    = require("../middleware/auth");
const multer  = require("../middleware/multer");

const UserCtrl = require("../controller/UserCtrl");

router.post("/signup", UserCtrl.signup);
router.post("/login", UserCtrl.login);
router.get("/list", auth, UserCtrl.list);
router.post("/create", auth, multer, UserCtrl.create);
router.get("/read:id", auth, UserCtrl.read);
router.put("/update:id", auth, multer, UserCtrl.update);
router.delete("/delete:id", auth, UserCtrl.delete);

module.exports = router;
