import React, {Component} from 'react'

class SignupForm extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleEmailChange    = e => {
    e.preventDefault()
    this.setState({email: e.target.value})

  }
  handlePasswordChange = e => {
    e.preventDefault()
    this.setState({password: e.target.value})

  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    let {email, password} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="email" value={email} name={`email`} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Password
          <input type="password" value={password} name={`password`} onChange={this.handleChange}/>
        </label>
        <br/>
        <button type={`submit`}>Submit</button>
      </form>
    )
  }
}

export default SignupForm