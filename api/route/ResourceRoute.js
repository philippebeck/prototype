"use strict";

const express = require("express");
const router = express.Router();

//const auth    = require("../middleware/auth");
//const multer  = require("../middleware/multer");

const ResourceCtrl = require("../controller/ResourceCtrl");

router.get("/", ResourceCtrl.listResources);
router.post("/", ResourceCtrl.createResource);
router.get("/:id", ResourceCtrl.readResource);
router.put("/:id", ResourceCtrl.updateResource);
router.delete("/:id", ResourceCtrl.deleteResource);

module.exports = router;
