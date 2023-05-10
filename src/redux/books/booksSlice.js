import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      };
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },

  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
