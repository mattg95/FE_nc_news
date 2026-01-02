import axios from "axios";

const baseURL = "http://localhost:3000";

export const getTopics = () => {
  return axios.get(baseURL + "/topics").then(({ data }) => data);
};

export const getAllArticles = () => {
  return axios.get(baseURL + "/articles").then(({ data }) => data);
};

export const getArticlesByTopic = (topic = "", sortBy = "", order = "") => {
  return axios
    .get(
      baseURL + `/articles?topic_id=${topic}&sort_by=${sortBy}&order=${order}`
    )
    .then(({ data }) => data);
};

export const getArticleById = (articleId) => {
  return axios.get(baseURL + `/articles/${articleId}`).then(({ data }) => data);
};

export const getCommentsForArticle = (articleId) => {
  return axios
    .get(baseURL + `/comments?article_id=${articleId}&sort_by=votes&order=desc`)
    .then(({ data }) => data);
};

export const postComment = (articleId, userId, comment) => {
  return axios.post(baseURL + `/comments`, {
    author: userId,
    body: comment,
    article_id: articleId,
  });
};

export const deleteComment = (commentId) => {
  return axios.delete(baseURL + `/comments/${commentId}`);
};

export const voteHandler = (thing, id, vote) => {
  return axios.patch(baseURL + `/${thing}/${id}/votes`, {
    inc_votes: vote,
  });
};
