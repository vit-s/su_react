import React, {useEffect, useState} from 'react'
import axios                        from "axios"

const News = () => {
  let [articles, setArticles] = useState([])
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let fetchArticles = () => {
      return axios
      .get(`https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10`)
      .then(({data}) => setArticles(data.hits))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
    }
    fetchArticles()
    return () => {
      // function to cancel http request
    }
  }, [])

  return (
    <ul>
      {articles.map(({objectID, title, url}) => (
        <li key={objectID}>
          <a href={url} target={`_blank`} rel={`noopener noreferrer`}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default News