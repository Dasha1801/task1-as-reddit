const axios = require("axios");
const PATH = require("../constants/index");

const sendArticleInDb = (res) =>
  axios.post("http://localhost:3001/api/articles", res).catch(function (error) {
    console.log("error");
  });

const fetchArticles = async () => {
  try {
    (await axios.get(PATH.data)).data.data.children
      .map((el) => el.data)
      .map((el) => sendArticleInDb(el));
  } catch (Error) {
    console.error(Error);
  }
};

exports.fetchArticles = fetchArticles;
