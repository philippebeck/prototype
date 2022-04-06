"use strict";

const LinkModel = require("../model/LinkModel");

/**
 * LIST LINK
 * @param {*} req 
 * @param {*} res 
 */
exports.listLinks = (req, res) => {
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
 */
exports.updateLink = (req, res) => {
  let link = req.body;
  LinkModel
    .updateOne({ _id: req.params.id }, { ...link, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Link updated !" }))
    .catch(error => res.status(400).json({ error }));
};

/**
 * DELETE LINK
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteLink = (req, res) => {
  LinkModel
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Link deleted !" }))
    .catch(error => res.status(400).json({ error }))
};
