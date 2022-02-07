const db = require("../models");
const SavedArticle = db.savedArticles;

exports.createSavedArticle = (req, res) => {
  const savedArticle = {
    id: req.body.id,
    author: req.body.author,
    title: req.body.title,
    selftext: req.body.selftext,
    url: req.body.url,
    score: req.body.score,
    num_comments: req.body.num_comments,
  };

  SavedArticle.create(savedArticle)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SavedArticle.",
      });
    });
};

exports.findAllSavedArticles = (req, res) => {
  SavedArticle.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SavedArticle.",
      });
    });
};

exports.deleteSavedArticles = (req, res) => {
  const id = req.params.id;

  SavedArticle.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "SavedArticle was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete SavedArticle with id=${id}. Maybe SavedArticle was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete SavedArticle with id=" + id,
      });
    });
};
