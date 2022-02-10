const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const app = express();
const { fetchData } = require("./utils/index");
const { timeUpdate } = require("./constants/index");

const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin:
    PORT === 3001 ? "http://localhost:3000" : "https://as-reddit.netlify.app",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => console.log("re-sync done!"));

require("./routes/article.route")(app);
require("./routes/comment.route")(app);
require("./routes/savedArticle.route")(app);
require("./routes/rule.route")(app);
require("./routes/cities.router")(app);
require("./routes/auth.route")(app);
require("./routes/user.route")(app);

setInterval(() => {
  fetchData();
}, timeUpdate);

app.listen(PORT, () => {
  console.log(`Yey, your server is running on port ${PORT}`);
});
