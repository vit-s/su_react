import axios from "axios"

const ArticlesApi = (searchQuery, page = 0, hits = 5) => {
  console.log(`hits =>> `, hits)
  return axios
  .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=${hits}`)
  .then(res => res.data.hits)
}

export default ArticlesApi

