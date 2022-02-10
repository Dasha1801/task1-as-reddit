module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.TEXT,
    },
  });

  return User;
};
