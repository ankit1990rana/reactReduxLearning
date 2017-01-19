import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import activeBook from './reducer_active_books';

const rootReducer = combineReducers({ // Combine all the rducers, act as state or store
  books : BooksReducer,
  activeBook : activeBook
});

export default rootReducer;
