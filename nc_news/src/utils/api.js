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

exports.getArticleById = articleId => {
  return axios
    .get(baseURL + `/articles/${articleId}`)
    .then(({ data }) => data.article);
};
exports.getCommentsForArticle = articleId => {
  return axios
    .get(baseURL + `/articles/${articleId}/comments`)
    .then(({ data }) => data.comments);
};

exports.postComment = (articleId, username, comment) => {
  return axios
    .post(baseURL + `/articles/${articleId}/comments`, {
      username: username,
      body: comment
    })
};
