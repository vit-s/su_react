import React, {PureComponent} from 'react'
import axios                             from "axios"
import Layout                            from "../Layout"

class Ax extends PureComponent {

  state = {
    articles: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    // this.setState({loading: true})
    axios.get('https://hn.algolia.com/api/v1/search?query=react')
    .then(res => this.setState({articles: res.data.hits}))
    .catch(err => this.setState({err}))
    .finally(() => this.setState({loading: false}))
  }

  render() {

    let articles = this.state.articles.map(({objectID, title, url}) => (
      <li key={objectID}>
        <a href={url} target={`_blank`} >{title}</a>
      </li>
    ))

    return (
      <Layout>
        <h1>Articles</h1>
        {this.state.loading ? <div>Loading...</div> : <ul>{articles}</ul>}
      </Layout>
    )
  }
}

export default Ax