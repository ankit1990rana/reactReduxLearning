export default function activeBook(state = null, action){ // default state when app boots up
    switch(action.type){ // Fired when tupe match return the data in reducer
        case 'BOOK_SELECTED':
         return action.payload; // State will be changed now 
    }
    return state;
} 