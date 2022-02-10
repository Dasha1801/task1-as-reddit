const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  async function isValidEmail(model, email) {
    const data = await model.findOne({
      where: { email: email },
    });
    return data;
  }

  const user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    address: req.body.address,
    password: bcrypt.hashSync(req.body.password, 8),
  };

  const { email } = user;
  const isEmail = await isValidEmail(User, email);

  if (!isEmail) {
    User.create(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(">> Error while creating user: ", err);
      });
  }
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
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ email: user.email }, config.secret, {
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
