import React, {useState} from 'react'

const SignUpFormHook = () => {
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')

  let updateEmail = e => {
    setEmail()
  }

  console.log(`Email, Password =>> `, email, password)

  return (
    <div>
      <h2>SignUpFormHook</h2>
      <form>
        <span>Email</span>
        <input type="text" name={email} placeholder={`Email`}/>
        <span>Email</span>
        <input type="password" name={password} placeholder={`Password`}/>
        <button type={`submit`}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpFormHook