module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    author: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.TEXT,
    },
    score: {
      type: Sequelize.INTEGER,
    },
    created_utc: {
      type: Sequelize.INTEGER,
    },
    articleId: {
      type: Sequelize.STRING,
    },
  });

  return Comment;
};
