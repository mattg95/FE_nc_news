const axios = require('axios').default;


exports.getTopics = () => {
    return axios.get("https://nc-news-matt-g.herokuapp.com/api/topics").then(({ data }) =>
        (data.topics))
    
}


