module.exports = (app) => {
  const savedArticles = require("../controllers/savedArticle.controller");

  const router = require("express").Router();

  router.post("/", savedArticles.createSavedArticle);
  router.get("/", savedArticles.findAllSavedArticles);
  router.delete("/:id", savedArticles.deleteSavedArticles);

  app.use("/save", router);
};
