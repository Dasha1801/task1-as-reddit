module.exports = (app) => {
  const rules = require("../controllers/rule.controller");

  const router = require("express").Router();

  router.post("/", rules.createRule);
  router.get("/", rules.findAllRules);

  app.use("/rules", router);
};
