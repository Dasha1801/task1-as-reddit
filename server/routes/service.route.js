module.exports = (app) => {
  const services = require("../controllers/service.controller");

  const router = require("express").Router();

  router.post("/service", services.addService);
  router.post("/services", services.findServices);
  router.post("/delete", services.deleteService);

  app.use("/", router);
};
