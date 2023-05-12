import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const bookData = createAsyncThunk('users/fetchbooks', async () => {
  try {
    const response = await axios
      .get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oOYSrWPbrQuzF5DjPkWx/books');
    return response.data;
  } catch (error) {
    throw Error('Error fetching data from API');
  }
});

export const addBookToAPI = createAsyncThunk('users/addbook', async (initialBook) => {
  try {
    const response = await axios
      .post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oOYSrWPbrQuzF5DjPkWx/books', initialBook);
    return response.data;
  } catch (error) {
    throw Error('Error posting data to API');
  }
});

export const removeBookFromAPI = createAsyncThunk('users/removebook', async (id) => {
  try {
    const response = await axios
      .delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oOYSrWPbrQuzF5DjPkWx/books/${id}`);
    return response.data;
  } catch (error) {
    throw Error('Error deleting data from API');
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(bookData.pending, (state) => {
        state.loading = true;
      })
      .addCase(bookData.fulfilled, (state, { payload }) => {
        state.loading = false;
        const books = Object.entries(payload).flatMap(([key, value]) => value.map((book) => (
          { ...book, item_id: key })));
        state.books = books;
      })
      .addCase(bookData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
