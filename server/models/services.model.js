module.exports = (sequelize, Sequelize) => {
  const Services = sequelize.define("service", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
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
    },
  });

  return Services;
};
