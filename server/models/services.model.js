module.exports = (sequelize, Sequelize) => {
  const Services = sequelize.define("service", {
    userId: {
      type: Sequelize.STRING,
    },
    productId: {
      type: Sequelize.STRING,
    },
    servicesName: {
      type: Sequelize.STRING,
    },
    serviceId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
  });

  return Services;
};
