"use strict";

const fs            = require("fs");
const ResourceModel = require("../model/ResourceModel");

/**
 * 
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
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.createResource = (req, res, next) => {
  const resourceObject = JSON.parse(req.body.resource);
  delete resourceObject._id;

  const imgUrl  = `${req.protocol}://${req.get("host")}/${process.env.IMG}/${req.file.filename}`;
  const resource   = new ResourceModel({ ...resourceObject, imageUrl: imgUrl });

  resource
    .save()
    .then(() => res.status(201).json({ message: "Post saved successfully!" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.readResource = (req, res, next) => {
  ResourceModel
    .findOne({_id: req.params.id })
    .then(resource => res.status(200).json(resource))
    .catch(error => res.status(404).json({error}));
};

/**
 * 
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
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * 
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
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};
