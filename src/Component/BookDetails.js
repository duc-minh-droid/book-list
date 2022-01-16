import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

function BookDetails({book}) {
    const { dispatch } = useContext(BookContext)

    return (
        <li className='flexli' onClick={()=>dispatch({ type: "REMOVE_BOOK", id: book.id})}>
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
        </li>
    )
}

export default BookDetails
