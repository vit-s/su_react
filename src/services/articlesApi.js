import axios from "axios"

const ArticlesApi = (searchQuery, page = 0, hits = 5) => {
  return axios
  .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=${hits}`)
  .then(res => {
    console.log(` =>> `, res.data)
    return res.data.hits
  })

}

export default ArticlesApi

