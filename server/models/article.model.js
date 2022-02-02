module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
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

  return Article;
};
