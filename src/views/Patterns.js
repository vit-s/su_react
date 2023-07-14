import React       from 'react'
import MyComponent from "../components/MyComponent"
import Toggler  from "../components/Toggler"
import UserMenu from "../components/UserMenu"

const Patterns = () => {
  return (
    <div>
      <UserMenu/>
      <Toggler>
        {
          ({isOpen, onToggle}) => (
            <>
              <button type={`button`} onClick={onToggle}>{isOpen ? 'Hide' : 'Show'}</button>
              {isOpen && <MyComponent a={`a`} b={`b`}/>}
            </>
          )
        }
      </Toggler>
    </div>
  )
}

export default Patterns