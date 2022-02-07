const db = require("../models");
const Rule = db.rules;

exports.createRule = (req, res) => {
  const rule = {
    short_name: req.body.short_name,
    description: req.body.description,
    created_utc: req.body.created_utc,
  };

  Rule.create(rule)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Rule.",
      });
    });
};

exports.findAllRules = (req, res) => {
  Rule.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving rules.",
      });
    });
};
