const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", controller.signup);

  app.post("/api/auth/login", controller.login);

  app.put("/api/auth/update", controller.updateProfile);

  app.post("/api/auth/socialLogin", controller.socialLogin);

  app.put("/api/auth/logout", controller.logout);
};
