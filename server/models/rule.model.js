module.exports = (sequelize, Sequelize) => {
  const Rule = sequelize.define("rule", {
    short_name: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    description: {
      type: Sequelize.TEXT,
    },
    created_utc: {
      type: Sequelize.INTEGER,
    },
  });

  return Rule;
};
