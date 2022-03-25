const axios = require("axios");
const PATH = require("../constants/index");

const sendArticleInDb = (res) =>
  axios.post("http://localhost:3001/", res).catch(function (error) {
    console.log(error);
  });

const sendCommentInDb = (res) =>
  axios.post("http://localhost:3001/comment", res).catch(function (error) {
    console.log(error);
  });

const fetchComments = async (id) => {
  try {
    (await axios.get(`${PATH.comments}${id}.json`)).data[1].data.children
      .map((el) => el.data)
      .map((el) => {
        sendCommentInDb({ articleId: id, ...el });
      });
  } catch (Error) {
    console.error(Error);
  }
};

const fetchData = async () => {
  try {
    (await axios.get(PATH.data)).data.data.children
      .map((el) => el.data)
      .map((el) => {
        sendArticleInDb(el);
        fetchComments(el.id);
      });
  } catch (Error) {
    console.error(Error);
  }
};

const handler = (ws, msg, aWss) => {
  ws.id = msg.id;
  aWss.clients.forEach((client) => {
    if (client.id === msg.id) {
      client.send(JSON.stringify(msg));
    }
  });
};

exports.handler = handler;
exports.fetchData = fetchData;
