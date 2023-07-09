import React, {PureComponent} from 'react'
// import axios                  from "axios"
import Layout                 from "../Layout"
import Spinner                from "../Spinner"
import Error                  from "../Error"
import articlesApi            from '../../services/articlesApi'
import SearchForm             from '../SearchForm'



class Ax extends PureComponent {

  state = {
    articles: [],
    error: false,
    loading: false,
    searchQuery: '',
    page: 0,
    hits: 7,
  }

  componentDidUpdate(prevProps, prevState) {
    let prevQuery = prevState.searchQuery
    let nextQuery = this.state.searchQuery
    prevQuery !== nextQuery && this.fetchArticles()
  }

  fetchArticles = () => {

    let {searchQuery, page} = this.state
    this.setState({loading: true})


    articlesApi(searchQuery, page)
    .then(articles => this.setState(prevState => ({
      articles: [...prevState.articles, ...articles],
      page: prevState.page += 1,
    })))
    .catch(error => this.setState({error}))
    .finally(() => this.setState({loading: false}))
  }

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      articles: [],
    })
  }

  render() {
    let {articles, error, loading, hits} = this.state

    return (
      <Layout>
        <h1>Articles</h1>
        <SearchForm onSubmit={this.handleSearchFormSubmit} hits={hits}/>
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
        <button type={`button`} onClick={this.fetchArticles}>More</button>
      </Layout>
    )
  }

}

export default Ax