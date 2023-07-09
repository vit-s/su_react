import React, {Component} from 'react'

console.log(`SearchForm =>> OK`)


class SearchForm extends Component {

  state = {
    inputValue: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  handleChange = e => {
    e.propertyIsEnumerable()
    this.setState({inputValue: e.target.value})
  }

  render() {

    let {inputValue} = this.state

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
          <span>{this.props.hits} hits</span>
        </form>
      </div>
    )
  }
}

export default SearchForm