const axios = require('axios').default;
const baseURL = 'http://localhost:3000';

exports.getTopics = () => {
  return axios.get(baseURL + '/topics').then(({ data }) => data);
};

exports.getAllArticles = () => {
  return axios.get(baseURL + '/articles').then(({ data }) => data);
};

exports.sortArticles = (sortBy, order) => {
  return axios.get(baseURL + `/articles?sort_by=${sortBy}&order=${order}`).then(({ data }) => data);
};

exports.getArticlesByTopic = (topic) => {
  return axios.get(baseURL + `/articles?topic=${topic}`).then(({ data }) => data);
};

exports.getArticleById = (articleId) => {
  return axios.get(baseURL + `/articles/${articleId}`).then(({ data }) => data);
};
exports.getCommentsForArticle = (articleId) => {
  return axios.get(baseURL + `/comments?article_id=${articleId}&sort_by=votes&order=desc`).then(({ data }) => data);
};

exports.postComment = (articleId, userId, comment) => {
  return axios.post(baseURL + `/comments`, {
    author: userId,
    body: comment,
    article_id: articleId,
  });
};

exports.deleteComment = (commentId) => {
  return axios.delete(baseURL + `/comments/${commentId}`);
};

exports.voteHandler = (thing, id, vote) => {
  return axios.patch(baseURL + `/${thing}/${id}/votes`, {
    inc_votes: vote,
  });
};
