import React, {Component} from 'react'

class SearchForm extends Component {

  state = {
    inputValue: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    // console.log(`handleSubmit =>> ${this.state.inputValue}`)
    this.props.onSubmit(this.state.inputValue)
  }

  handleChange = e => {
    e.propertyIsEnumerable()
    console.log(`handleChange =>> `)
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
              defaultValue={inputValue}
              placeholder={`search...`}
              onChange={this.handleChange}/>
          </label>
          <button type={`submit`}>Go</button>
        </form>
      </div>
    )
  }
}

export default SearchForm