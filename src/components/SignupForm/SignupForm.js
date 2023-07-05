import React, {Component} from 'react'
import {green}            from "@mui/material/colors"
import Layout             from "../Layout"

const Subscription = {
  FREE: 'free',
  PRO: 'pro',
  PREMIUM: 'premium',
}

class SignupForm extends Component {

  state = {
    email: '',
    password: '',
    subscription: 'free',
    agreed: false,
    age: '',
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubscriptionChange = (e) => {
    this.setState({
      subscription: e.target.value,
    })
  }

  handleAgreedChange = e => {
    console.log(`handleAgreedChange =>> `, e)
    this.setState({
      agreed: e.target.checked,
    })
  }

  handleAgeChange = e => {
    console.log(`handleAgeChange =>> `)
    this.setState({
      age: e.target.value,
    })
  }

  render() {

    let {email, password, subscription, agreed, age} = this.state

    return (
      <Layout>

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
          <div role={`group`}>
            <label>
              Free
              <input type="radio" value={Subscription.FREE} checked={Subscription.FREE === subscription}
                     onChange={this.handleSubscriptionChange}/>
            </label>
            <label>
              Pro
              <input type="radio" value={Subscription.PRO} checked={Subscription.PRO === subscription}
                     onChange={this.handleSubscriptionChange}/>
            </label>
            <label>
              Premium
              <input type="radio" value={Subscription.PREMIUM} checked={Subscription.PREMIUM === subscription}
                     onChange={this.handleSubscriptionChange}/>
            </label>
          </div>
          <br/>
          <label>
            Choose your age
            <select name="age" value={age} onChange={this.handleAgeChange}>
              <option value="">...</option>
              <option value="18-26">18-26</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>
          <br/>
          <label>
            Accept
            <input type="checkbox" checked={agreed} onChange={this.handleAgreedChange}/>
          </label>
          <br/>
          <button type={`submit`} disabled={!agreed}>Submit</button>
        </form>
      </Layout>
    )
  }
}

export default SignupForm