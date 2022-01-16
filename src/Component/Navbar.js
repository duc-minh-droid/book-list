import React, {useContext} from 'react'
import { BookContext } from '../Context/BookContext'

function Navbar() {
    const {books} = useContext(BookContext)

    return (
        <div className='navbar'>
            <h1>to-read list</h1>
            <p>You currently got {books.length} more to go...</p>
        </div>
    )
}

export default Navbar
