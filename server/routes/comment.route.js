module.exports = (app) => {
  const comments = require("../controllers/comment.controller");

  const router = require("express").Router();

  router.post("/comment", comments.createComment);
  router.post("/comments", comments.findComments);

  app.use("/", router);
};
