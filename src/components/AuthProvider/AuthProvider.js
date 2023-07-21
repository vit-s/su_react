import React, {Component} from 'react'
import AuthContext        from "../../contexts/Auth"

class AuthProvider extends Component {
  state = {
    user: null,
    logIn: () => this.setState({user: 'Sara'}),
    logOut: () => this.setState({user: null})
  }
  render() {
    return (
      <div>
        <AuthContext.Provider value={this.state}>
          {this.props.children}
        </AuthContext.Provider>
      </div>
    )
  }
}

export default AuthProvider