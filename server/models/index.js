const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.articles = require("./article.model")(sequelize, Sequelize);
db.savedArticles = require("./savedArticle.model")(sequelize, Sequelize);
db.comments = require("./comment.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.services = require("./services.model")(sequelize, Sequelize);

db.users.hasMany(db.savedArticles, {
  as: "savedArticles",
  onDelete: "cascade",
});

db.savedArticles.belongsTo(db.users, {
  foreignKey: "userEmail",
  as: "user",
  onDelete: "cascade",
});

module.exports = db;
