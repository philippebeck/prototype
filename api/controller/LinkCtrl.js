"use strict";

const fs        = require("fs");
const LinkModel = require("../model/LinkModel");

/**
 * LIST LINK
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.listLinks = (req, res, next) => {
  LinkModel
    .find()
    .then(links => res.status(200).json(links))
    .catch(error => res.status(400).json({ error }));
};

/**
 * CREATE LINK
 * @param {*} req 
 * @param {*} res 
 */
exports.createLink = (req, res) => {
  let link = new LinkModel(req.body);
  link
    .save()
    .then(() => res.status(201).json({ message: "Link created !" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * UPDATE LINK
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.updateLink = (req, res, next) => {
  const linkObject = req.file ?
    {
      ...JSON.parse(req.body.link),
      imageUrl: `${req.protocol}://${req.get("host")}/${process.env.IMG}/${req.file.filename}`
    }
    : { ...req.body };
    
  LinkModel
    .updateOne({ _id: req.params.id }, { ...linkObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Link updated !" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * DELETE LINK
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.deleteLink = (req, res, next) => {
  LinkModel
    .findOne({ _id: req.params.id })
    .then(link => {
      const filename = link.imageUrl.split(`/${process.env.IMG}/`)[1];

      fs.unlink(`${process.env.IMG}/${filename}`, () => {
        LinkModel
          .deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Link deleted !" }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};
