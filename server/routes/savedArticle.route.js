const { authJwt } = require("../middleware");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  const savedArticles = require("../controllers/savedArticle.controller");
  const router = require("express").Router();

  router.post("/", [authJwt.verifyToken], savedArticles.createSavedArticle);
  router.get("/", [authJwt.verifyToken], savedArticles.findAllSavedArticles);
  router.delete(
    "/:id",
    [authJwt.verifyToken],
    savedArticles.deleteSavedArticles
  );

  app.use("/save", router);
};
