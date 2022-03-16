module.exports = (sequelize, Sequelize) => {
  const Services = sequelize.define("service", {
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
    category: Sequelize.STRING,
  });

  return Services;
};
