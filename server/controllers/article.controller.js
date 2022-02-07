const db = require("../models");
const Article = db.articles;

exports.create = (req, res) => {
  const article = {
    id: req.body.id,
    author: req.body.author,
    title: req.body.title,
    selftext: req.body.selftext,
    url: req.body.url,
    score: req.body.score,
    num_comments: req.body.num_comments,
  };

  Article.create(article)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article.",
      });
    });
};

exports.findAllArticles = (req, res) => {
  const { limit } = req.body;
  Article.findAll({
    offset: 1,
    limit: limit,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Article.",
      });
    });
};
