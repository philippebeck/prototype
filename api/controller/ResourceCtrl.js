"use strict";

const fs            = require("fs");
const ResourceModel = require("../model/ResourceModel");

/**
 * LIST RESOURCE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.listResources = (req, res, next) => {
  ResourceModel
    .find()
    .then(resources => res.status(200).json(resources))
    .catch(error => res.status(400).json({ error }));
};

/**
 * CREATE RESOURCE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.createResource = (req, res, next) => {
  const resourceObject = JSON.parse(req.body.resource);
  delete resourceObject._id;

  const resource = new ResourceModel({ ...resourceObject });

  resource
    .save()
    .then(() => res.status(201).json({ message: "Resource created !" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * UPDATE RESOURCE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.updateResource = (req, res, next) => {
  const resourceObject = req.file ?
    {
      ...JSON.parse(req.body.resource),
      imageUrl: `${req.protocol}://${req.get("host")}/${process.env.IMG}/${req.file.filename}`
    }
    : { ...req.body };
    
  ResourceModel
    .updateOne({ _id: req.params.id }, { ...resourceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Resource updated !" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * DELETE RESOURCE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.deleteResource = (req, res, next) => {
  ResourceModel
    .findOne({ _id: req.params.id })
    .then(resource => {
      const filename = resource.imageUrl.split(`/${process.env.IMG}/`)[1];

      fs.unlink(`${process.env.IMG}/${filename}`, () => {
        ResourceModel
          .deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Resource deleted !" }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};
