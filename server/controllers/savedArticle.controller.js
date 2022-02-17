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
    userEmail: req.email,
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
  SavedArticle.findAll({ where: { userEmail: req.email } })
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
  const userEmail = req.email;

  SavedArticle.destroy({
    where: { id: id, userEmail: userEmail },
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
