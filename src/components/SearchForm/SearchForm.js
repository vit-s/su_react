import React, {Component} from 'react'

class SearchForm extends Component {

  state = {
    inputValue: '',
    hitsValue: 1,
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.inputValue, this.state.hitsValue)
    this.setState({inputValue: ''})
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({inputValue: e.target.value})
  }

  handleHitsChange = e => {
    e.preventDefault()
    console.log(` handleHitsChange =>> `, e.target.valueOf)
    this.setState({hitsValue: e.target.value})
  }

  render() {

    let {inputValue, hitsValue} = this.state

    return (
      <div>
        <h1>Search Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={inputValue}
              placeholder={`search...`}
              onChange={this.handleChange}/>
          </label>
          <button type={`submit`}>Go</button>
            <input
              type="number"
              value={hitsValue}
              placeholder={`hits`}
              onChange={this.handleHitsChange}
            />
          <span>hits</span>
        </form>
      </div>
    )
  }
}

export default SearchForm