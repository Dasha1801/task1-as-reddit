const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    address: req.body.address,
    password: bcrypt.hashSync(req.body.password, 8),
  };

  User.findOne({
    where: {
      email: user.email,
    },
  })
    .then((email) => {
      if (email) {
        return res
          .status(401)
          .send({ message: "Failed! Email is already in use!" });
      }

      const token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: 86400,
      });

      User.create(user).then((data) => {
        res.send({ accessToken: token, ...data });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({ message: "User Not found." });
      }
      if (req.body.name !== user.name) {
        return res.status(401).send({ message: "User Not found." });
      }
      const token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: 86400,
      });

      res.status(200).send({
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        address: user.address,
        password: user.password,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.logout = (req, res) => {
  const token = req.headers["x-access-token"];
  jwt.sign(token, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.status(200).send({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        password: "",
        accessToken: "",
      });
    } else {
      res.send({ msg: "Error" });
    }
  });
};
