module.exports = (app) => {
  const articles = require("../controllers/article.controller");

  const router = require("express").Router();

  router.post("/", articles.create);

  app.use("/api/articles", router);
};
