export default function selectBook(book){
   // Action creator, it returns an action with type and property
   return{ // This will automatically passed to all the reducers
       type: 'BOOK_SELECTED', // Required perameter always  uppercase. Type of action
       payload : book // optional, data in the action
   }
}