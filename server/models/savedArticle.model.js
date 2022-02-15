module.exports = (sequelize, Sequelize) => {
  const SavedArticle = sequelize.define("savedArticle", {
    number: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    selftext: {
      type: Sequelize.TEXT,
    },
    url: {
      type: Sequelize.STRING,
    },
    score: {
      type: Sequelize.INTEGER,
    },
    num_comments: {
      type: Sequelize.INTEGER,
    },
  });

  return SavedArticle;
};
