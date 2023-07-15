import React         from "react"
import './App.css'
import Product       from "../Product"
import Section     from "../Section"
// import BookList      from "../BookList"
// import favoriteBooks from "../../books.json"
import TaskList       from "../TaskList"
import CreateTask     from '../../utils/create-task'
import SignupForm     from "../SignupForm"
import Tabs           from "../Tabs"
import tabs           from '../../tabs.json'
import Counter        from "../Counter"
import Ax             from '../Ax'
import Patterns       from "../../views/Patterns"
import AuthContext    from "../../contexts/Auth"
import CounterHook    from "../CounterHook"
import SignUpFormHook from "../SignUpFormHook"

let task = []
task.push(CreateTask())
let user = {
  name: 'Vova',
  email: 'vova@email.com',
  avatar: 'avatar.img'
}

console.log(`APP =>> OK`)

let App = () => {
  return (
    <AuthContext.Provider value={user}>
      <CounterHook/>
      <SignUpFormHook/>
      <Patterns/>
      <Ax/>
      <SignupForm/>
      <br/>
      <Tabs items={tabs}/>
      <br/>
      <h1>Welcome</h1>
      <TaskList tasks={task}/>
      <Counter step={2}/>
      <Section
        title={`Best`}
        idSection={`welc_prod`}
      >
        <Product
          buyLinkName={`Click for the more details -> `}
          name={`Anana`}
          price={20}
          qty={10}
          imgUrl={`https://images.unsplash.com/photo-1589606743932-747c74e7330e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbmFzfGVufDB8fDB8fHww&w=1000&q=80`}
        />
      </Section>
      {/*Product section two*/}
      <Section
        title={`Recommended`}
        classSection={`second_prod`}
        classSectionTwo={`second_prod_prod_block`}
        idSection={`recc_prod`}
      >
        <Product
          buyLink={`google.com`}
          buyLinkName={`Buy`}
          name={`Oranges`}
          price={100}
          qty={220}
          imgUrl={`https://images.unsplash.com/photo-1587223962930-cb7f31384c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2t0YWlsfGVufDB8fDB8fHww&w=1000&q=80`}
        />
      </Section>
    </AuthContext.Provider>
  )
}

export default App
