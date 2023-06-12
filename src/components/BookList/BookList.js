import React from 'react'

const BookList = ({books}) => {
  return (
    <ul>
      {books.map(({id, name}) => (
        <li key={id} className={`book-${id}`}>{name}</li>
      ))}
    </ul>
  )
}

export default BookList