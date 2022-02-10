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
db.rules = require("./rule.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);

module.exports = db;
