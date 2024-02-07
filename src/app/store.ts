import { configureStore } from '@reduxjs/toolkit'
import booksReducer from "./books/booksSlice"
import { fetchBooksSlice } from './books/services/fetchBooksSlice'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    fetchBooks: fetchBooksSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
