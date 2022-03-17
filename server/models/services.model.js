module.exports = (sequelize, Sequelize) => {
  const Services = sequelize.define("service", {
    number: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: Sequelize.STRING,
    },
    servicesName: {
      type: Sequelize.STRING,
    },
    serviceId: {
      type: Sequelize.STRING,
    },
    category: Sequelize.STRING,
  });

  return Services;
};
