module.exports = (app) => {
  const articles = require("../controllers/article.controller");

  const router = require("express").Router();

  router.post("/", articles.create);
  router.post("/posts", articles.findAllArticles);

  app.use("/", router);
};
