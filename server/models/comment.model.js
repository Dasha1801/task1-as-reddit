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
    replies: {
      type: Sequelize.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("replies"));
      },
      set: function (val) {
        return this.setDataValue("replies", JSON.stringify(val));
      },
    },
  });

  return Comment;
};
