import React, {useContext} from 'react'
import AuthContext         from "../../contexts/Auth"

const Profile = () => {

  let auth = useContext(AuthContext)
  console.log(`auth =>> `, auth)

  return (
    <div>
      {auth.user ? (
        <><button type={`button`} onClick={auth.logOut}>
          Logout
        </button></>
      ) : (
        <button type={`button`} onClick={auth.logIn}>
          Login
        </button>
      )}
    </div>
  )
}

export default Profile