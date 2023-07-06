import axios from "axios"

const ArticlesApi = (searchQuery) =>
  axios
  .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  .then(res => res.data.hits)

const apis = {
  ArticlesApi,
}

export default apis

