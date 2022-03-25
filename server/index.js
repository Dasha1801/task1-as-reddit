const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const app = express();
const WSServer = require("express-ws")(app);
const aWss = WSServer.getWss();
const { handler } = require("./utils/index");
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


app.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    msg = JSON.parse(msg);
    switch (msg.method) {
      case "connection":
        handler(ws, msg, aWss);
        break;
      case "update":
        handler(ws, msg, aWss);
        break;
    }
  });
});

db.sequelize.sync({ force: false }).then(() => console.log("re-sync done!"));

require("./routes/article.route")(app);
require("./routes/comment.route")(app);
require("./routes/savedArticle.route")(app);
require("./routes/user.route")(app);
require("./routes/service.route")(app);

// setInterval(() => {
//   fetchData();
// }, timeUpdate);

app.listen(PORT, () => {
  console.log(`Yey, your server is running on port ${PORT}`);
});
