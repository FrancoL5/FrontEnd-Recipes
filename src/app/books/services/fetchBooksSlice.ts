import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Volumens } from "../../../interfaces/volumens.interface"
import { RootState } from "../../store"

export const fetchBySearchBooks = createAsyncThunk<Volumens, string>(
    "fetchBooks/fetchBySearch",
    async (search, { rejectWithValue }) => {
        // https://www.googleapis.com/books/v1/volumes?q=search+terms
        // intitle: Muestra resultados en los que el texto que sigue a esta palabra clave se encuentra en el título.
        // inauthor: Muestra resultados en los que el texto que sigue a esta palabra clave se encuentra en el autor.
        // inpublisher: Muestra resultados en los que el texto que sigue a esta palabra clave se encuentra en el editor.
        // subject: Muestra resultados en los que el texto que sigue a esta palabra clave aparece en la lista de categorías del volumen.
        // isbn: Muestra resultados en los que el texto que sigue a esta palabra clave es el número ISBN.
        // lccn: Muestra resultados en los que el texto que sigue a esta palabra clave es el número de control de la biblioteca del congreso.
        // oclc: Muestra resultados en los que el texto que sigue a esta palabra clave es el número del Centro de bibliotecas en línea de la computadora.

        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}&key=`
        )
        const data = await response.json()
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(data)
        }
        return data
    }
)

type RequestState = "pending" | "fulfilled" | "rejected"

export const fetchBooksSlice = createSlice({
    name: "fetchBooks",
    initialState: {
        dataBySearch: {} as Record<string, Volumens | undefined>,
        statusBySearch: {} as Record<string, RequestState | undefined>,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBySearchBooks.pending, (state, action) => {
            state.statusBySearch[action.meta.arg] = "pending"
        })
        builder.addCase(fetchBySearchBooks.fulfilled, (state, action) => {
            state.statusBySearch[action.meta.arg] = "fulfilled"
            state.dataBySearch[action.meta.arg] = action.payload
        })
        builder.addCase(fetchBySearchBooks.rejected, (state, action) => {
            state.statusBySearch[action.meta.arg] = "rejected"
        })
    },
})

export const selectStatusBySearch = (state: RootState, search: string) =>
    state.fetchBooks.statusBySearch[search]
export const selectDataBySearch = (state: RootState, search: string) =>
    state.fetchBooks.dataBySearch[search]
