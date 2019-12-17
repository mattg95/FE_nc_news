const axios = require("axios").default;
const baseURL = "https://nc-news-matt-g.herokuapp.com/api";

exports.getTopics = () => {
  return axios.get(baseURL + "/topics").then(({ data }) => data.topics);
};

exports.getAllArticles = () => {
  return axios.get(baseURL + "/articles").then(({ data }) => data.articles);
};

exports.sortArticles = (sortBy, order) => {
  return axios
    .get(baseURL + `/articles?sort_by=${sortBy}&order=${order}`)
    .then(({ data }) => data.articles);
};

exports.getArticlesByTopic = topic => {
  return axios
    .get(baseURL + `/articles?topic=${topic}`)
    .then(({ data }) => data.articles);
};

exports.getArticleById = id => {
  return axios
    .get(baseURL + `/articles/${id}`)
    .then(({ data }) => data.article);
};
exports.getCommentsForArticle = id => {
  return axios
    .get(baseURL + `/articles/${id}/comments`)
    .then(({ data }) => data.comments);
};

exports.postComment = (id, user, comment) => {
  console.log("posting comment")
  return axios
    .post(baseURL + `/articles/33/comments`, {
      username: "jessjelly",
      body: "please accept this humble comment"
    })
    .then(res => {
      console.log("comment submitted");
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    });
};
