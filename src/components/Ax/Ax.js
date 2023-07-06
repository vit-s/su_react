import React, {PureComponent} from 'react'
// import axios                  from "axios"
import Layout                 from "../Layout"
import Spinner                from "../Spinner"
import Error                  from "../Error"
import articlesApi            from '../../services/articlesApi'


class Ax extends PureComponent {

  state = {
    articles: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    // console.log(`ArticlesApi =>> `, articlesApi.ArticlesApi('react'))
    this.fetchArticles('ukraine')
  }

  fetchArticles = query => {
    articlesApi
    .ArticlesApi(query)
    .then(articles => this.setState({articles}))
    .catch(error => this.setState({error}))
    .finally(() => this.setState({loading: false}))
  }

  render() {
    let {articles, error, loading} = this.state

    return (
      <Layout>
        <h1>Articles</h1>
        {error && <Error message={`Something went wrong: ${error.message}`}/>}
        {loading && <div><Spinner message={`Pleas, wait...`}/></div>}
        {articles.length > 0 &&
        <ul>
          {articles.map(({objectID, title, url}) => (
            <li key={objectID}>
              <a href={url} target={`_blank`}>{title}</a>
            </li>
          ))}
        </ul>}
      </Layout>
    )
  }

}

export default Ax