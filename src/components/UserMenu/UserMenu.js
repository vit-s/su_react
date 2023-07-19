import React       from 'react'
import AuthContext from "../../contexts/Auth"

const style = {
  container: {
    display: 'flex',
    alignItem: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
}

const UserMenu = () => (
    <AuthContext.Consumer>
      {({name, avatar, email}) => {
        return (
          <>
            <div style={style.container}>
              <img src={avatar} alt="" width="32" style={style.avatar}/>
              <span style={style.name}>Welcome, {name} {email}</span>
              <button type={'button'}>Log Out</button>
            </div>
          </>
        )}}
    </AuthContext.Consumer>
  )

export default UserMenu