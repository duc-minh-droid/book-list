import { v4 as uuidv4 } from 'uuid'

export const BookReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
        case "ADD_BOOK":
            return [...state, {
                title: action.title,
                author: action.author,
                id: uuidv4()
            }]
        case "REMOVE_BOOK":
            return state.filter(book=>book.id!==action.id)
    }
}