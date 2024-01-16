import { configureStore } from '@reduxjs/toolkit'
import booksReducer from "./books/booksSlice"
import { fetchBooksSlice } from './books/services/fetchBooksSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    fetchBooks: fetchBooksSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

