import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Item, Volumens } from "../../interfaces/volumens.interface"

const initialState: Item[] = []



export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        toggleBookMark: (state, book: PayloadAction<Item>) => {
            const bookIndex = state.findIndex(
                (bookS) => bookS.id === book.payload.id
            )
            if (state[bookIndex]?.marked) {
                state.splice(bookIndex, 1)
            } else {
                state.push({ ...book.payload, marked: true })
            }
        },
    },
})
export const { toggleBookMark } = booksSlice.actions

export default booksSlice.reducer
