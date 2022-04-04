"use strict";

const express = require("express");
const router = express.Router();

const auth    = require("../middleware/auth");

const ResourceCtrl = require("../controller/ResourceCtrl");

router.get("/", ResourceCtrl.listResources);
router.post("/", ResourceCtrl.createResource);
router.put("/:id", auth, ResourceCtrl.updateResource);
router.delete("/:id", auth, ResourceCtrl.deleteResource);

module.exports = router;
