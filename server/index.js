const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const app = express();
const { fetchData } = require("./utils/index");
const { timeUpdate } = require("./constants/index");

const corsOptions = {
  // origin: "http://localhost:3000",
  origin: "https://as-reddit.netlify.app",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => console.log("re-sync done!"));

require("./routes/article.route")(app);
require("./routes/comment.route")(app);
require("./routes/savedArticle.route")(app);
require("./routes/rule.route")(app);

fetchData();

setInterval(() => {
  fetchData();
}, timeUpdate);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Yey, your server is running on port ${PORT}`);
});
