"use strict";

const fs        = require("fs");
const MainModel = require("../model/MainModel");

/**
 * LIST
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.list = (req, res, next) => {
  MainModel
    .find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};

/**
 * CREATE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = (req, res, next) => {
  const thingObject = JSON.parse(req.body.thing);
  delete thingObject._id;

  const imgUrl  = `${req.protocol}://${req.get("host")}/${process.env.IMG}/${req.file.filename}`;
  const thing   = new MainModel({ ...thingObject, image: imgUrl });

  thing
    .save()
    .then(() => res.status(201).json({ message: "Post saved successfully!" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * READ
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.read = (req, res, next) => {
  MainModel
    .findOne({_id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({error}));
};

/**
 * UPDATE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.update = (req, res, next) => {
  const thingObject = req.file ?
    {
      ...JSON.parse(req.body.thing),
      image: `${req.protocol}://${req.get("host")}/${process.env.IMG}/${req.file.filename}`
    }
    : { ...req.body };
    
  MainModel
    .updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * DELETE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.delete = (req, res, next) => {
  MainModel
    .findOne({ _id: req.params.id })
    .then(thing => {
      const filename = thing.image.split(`/${process.env.IMG}/`)[1];

      fs.unlink(`${process.env.IMG}/${filename}`, () => {
        MainModel
          .deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};
