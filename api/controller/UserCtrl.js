"use strict";

const bcrypt          = require("bcrypt");
const emailValidator  = require("email-validator"); 
const jwt             = require("jsonwebtoken");
const nodemailer      = require("nodemailer");
const passValidator   = require("password-validator");

const UserModel = require("../model/UserModel");

require("dotenv").config();

const schema = new passValidator();

schema
  .is().min(process.env.PASS_MIN)
  .is().max(process.env.PASS_MAX)
  .has().uppercase()
  .has().lowercase()
  .has().digits(process.env.PASS_INT)
  .has().not().spaces();

/**
 * LIST USERS
 * @param {object} req 
 * @param {object} res 
 */
exports.list = (req, res) => {
  UserModel
    .find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
};

/**
 * CREATE USER
 * @param {object} req 
 * @param {object} res 
 */
exports.create = (req, res) => {
  if (!emailValidator.validate(req.body.email)) {
    return res.status(401).json(
      { message: "Email invalide !" }
    );
  }

  if (!schema.validate(req.body.pass)) {
    return res.status(401).json(
      { message: "Mot de passe invalide !" }
    );
  };

  bcrypt
    .hash(req.body.pass, 10)
    .then(hash => {
      const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        pass: hash
      });

      user.save()
        .then(() => res.status(201).json(
          { message: "Utilisateur créé !" }
        ))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

/**
 * LOGIN USER
 * @param {object} req 
 * @param {object} res 
 */
exports.login = (req, res) => {
  UserModel
    .findOne({ email: req.body.email })
    .then(user => {

      if (!user) {
        return res.status(401).json(
          { error: "Utilisateur non trouvé !" }
        );
      }

      bcrypt
        .compare(req.body.pass, user.pass)
        .then(valid => {

          if (!valid) {
            return res.status(401).json(
              { error: "Mot de passe incorrect !" }
            );
          }

          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              process.env.JWT,
              { expiresIn: "24h" }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

/**
 * UPDATE USER
 * @param {object} req 
 * @param {object} res 
 */
exports.update = (req, res) => {
  if (!emailValidator.validate(req.body.email)) {
    return res.status(401).json(
      { message: "Email invalide !" }
    );
  }

  if (!schema.validate(req.body.pass)) {
    return res.status(401).json(
      { message: "Mot de passe invalide !" }
    );
  };

  bcrypt
    .hash(req.body.pass, 10)
    .then(hash => {
      let user = {
        name: req.body.name,
        email: req.body.email,
        pass: hash
      };

      UserModel
        .updateOne(
          { _id: req.params.id },
          { ...user, _id: req.params.id }
        )
        .then(() => res.status(200).json(
          { message: "Utilisateur modifié !" }
        ))
    })
    .catch(error => res.status(400).json({ error }));
};

/**
 * DELETE USER
 * @param {object} req 
 * @param {object} res 
 */
exports.delete = (req, res) => {
  UserModel
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json(
      { message: "Utilisateur supprimé !" }
    ))
    .catch(error => res.status(400).json({ error }));
};

/**
 * SEND
 * @param {*} req 
 * @param {*} res 
 */
exports.send = (req, res) => {
  let transport = {
    "host": process.env.MAIL_HOST,
    "port": process.env.MAIL_PORT,
    "secure": process.env.MAIL_SECURE,
    "auth": {
      "user": process.env.MAIL_USER,
      "pass": process.env.MAIL_PASS
    }
  };

  let transporter = nodemailer.createTransport(transport);
  let host        = req.get("host");

  (async function(){
    try {
      let message = { 
        from: process.env.MAIL_USER, 
        to: req.body.email, 
        bcc: process.env.MAIL_USER,
        subject: `Message (${host}) : ${req.body.subject}`, 
        text: req.body.message
      };

      await transporter.sendMail(message, function() {
        res.status(200).json(
          { message: "Message envoyé !" }
        );
      });

    } catch(e){
      console.error(e);
    }
  })();
};
