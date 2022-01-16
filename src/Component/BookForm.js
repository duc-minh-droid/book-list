import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/BookContext'

function BookForm() {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD_BOOK", title: title, author: author})
        setTitle("")
        setAuthor("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='flexy' >
                <input className='titleInp' type="text" placeholder="title" value={title} onChange={e=>setTitle(e.target.value)} required />
                <input className="authorInp" type="text" placeholder="author" value={author} onChange={e=>setAuthor(e.target.value)} required />
                    
                <input className='submit' type="submit" value="add book" />
            </div>
        </form>
    )
}

export default BookForm
