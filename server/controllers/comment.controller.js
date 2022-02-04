const db = require("../models");
const Comment = db.comments;

exports.createComment = (req, res) => {
  const comment = {
    id: req.body.id,
    author: req.body.author,
    body: req.body.body,
    score: req.body.score,
    created_utc: req.body.created_utc,
    articleId: req.body.articleId,
    replies: req.body.replies,
  };

  Comment.create(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment.",
      });
    });
};

exports.findComments = (req, res) => {
  const { id } = req.body;
  Comment.findAll({ where: { articleId: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding comments: ", err);
    });
};
