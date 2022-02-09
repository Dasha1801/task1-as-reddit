module.exports = (app) => {
  const router = require("express").Router();
  const searchMethod = require("../controllers/cities.controller");

  router.post("/:city", async (req, res) => {
    const city = req.params.city;
    const index = await searchMethod.searchCity(city);
    return res.json({ isCity: index !== -1 ? true : false });
  });

  app.use("/search", router);
};
