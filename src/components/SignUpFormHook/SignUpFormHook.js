import React, {useState} from 'react'

const SignUpFormHook = () => {
  const [email, setEmail]       = useState(' ')
  const [password, setPassword] = useState(' ')

  let updateEmail = e => {
    setEmail(e.target.value)
  }

  let updatePassword = e => {
    setPassword(e.target.value)
  }

  let handleSubmit = e => {
    e.preventDefault()
    console.log(`email ${email}, password ${password}`)
  }

  return (
    <div>
      <h2>SignUpFormHook</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name={email}
          placeholder={`Email`}
          onChange={updateEmail}/>
        <label>Password</label>
        <input
          type="password"
          name={password}
          placeholder={`Password`}
          onChange={updatePassword}/>
        <button type={`submit`}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpFormHook