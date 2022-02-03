module.exports = (app) => {
  const comments = require("../controllers/comment.controller");

  const router = require("express").Router();

  router.post("/", comments.createComment);

  app.use("/comments", router);
};
