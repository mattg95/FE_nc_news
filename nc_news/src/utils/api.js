const axios = require('axios').default;
const baseURL = "https://nc-news-matt-g.herokuapp.com/api"


exports.getTopics = () => {
    return axios.get(baseURL + "/topics").then(({ data }) =>
        (data.topics)
    )
}

exports.getAllArticles = () => {
    return axios.get(baseURL + "/articles").then(({ data }) =>
        (data.articles)
    )
}

exports.sortArticles = (sortBy, order) => {
    return axios.get(baseURL + `/articles?sort_by=${sortBy}&order=${order}`).then(({ data }) =>
    (data.articles)
)
}

exports.getArticlesByTopic = (topic) => {
    return axios.get(baseURL + `/articles?topic=${topic}`).then(({ data }) =>
    (data.articles)
)
}


exports.getArticleById = (id) => {
    return axios.get(baseURL + `/articles/${id}`).then(({ data }) =>
    (data.article)
    )
}
 exports.getCommentsForArticle = (articleId) => {
    return axios.get(baseURL + `/articles/${articleId}/comments`).then(({ data }) =>
    (data.comments)
    )         
}



