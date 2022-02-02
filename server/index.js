const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const app = express();
const { fetchArticles } = require("./utils/index");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => console.log("re-sync done!"));

require("./routes/article.route")(app);

fetchArticles();

setInterval(() => {
  fetchArticles();
}, 300000);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Yey, your server is running on port ${PORT}`);
});
