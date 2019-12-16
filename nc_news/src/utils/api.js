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


