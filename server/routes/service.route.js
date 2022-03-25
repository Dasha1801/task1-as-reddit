module.exports = (app) => {
  const services = require("../controllers/service.controller");

  const router = require("express").Router();

  router.post("/service", services.addService);
  router.get("/services", services.findServices);
  router.post("/delete", services.deleteService);

  app.use("/", router);
};
