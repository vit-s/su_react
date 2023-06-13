import React         from "react"
import './App.css'
import Product       from "../Product"
import Section       from "../Section"
import BookList      from "../BookList"
import favoriteBooks from "../../books.json"


let App = () => {
  return (
    <>
      <h1>Welcome</h1>
      {/*Book list*/}
      <h2>Book list</h2>
      <BookList books={favoriteBooks}/>
      {/*New product section*/}
      <Section title={`Best`} idSection={`welc_prod`}>
        <Product name={`Anana`} price={20} qty={10} imgUrl={`https://images.unsplash.com/photo-1589606743932-747c74e7330e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbmFzfGVufDB8fDB8fHww&w=1000&q=80`}/>
      </Section>
      {/*Product section two*/}
      <Section title={`Recommended`} classSection={`second_prod`} classSectionTwo={`second_prod_prod_block`} idSection={`recc_prod`}>
        <Product buyLink={`google.com`} buyLinkName={`Buy`} name={`Oranges`} price={100} qty={220} imgUrl={`https://images.unsplash.com/photo-1587223962930-cb7f31384c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2t0YWlsfGVufDB8fDB8fHww&w=1000&q=80`}/>
      </Section>
    </>
  )
}

export default App
