import { useEffect, useState } from "react"
import { Volumens } from "../../interfaces/volumens.interface"
import { BookCard } from "../books/bookCard"
import { fetchBySearchBooks } from "../../app/books/services/fetchBooksSlice"
import { useAppDispatch, useAppSelector } from "../../app/store"

export function DisplayAllBoks() {
    const dispatch = useAppDispatch()
    const books = useAppSelector((state) => state.fetchBooks.dataBySearch["harry potter"])
    useEffect(() => {
        dispatch(fetchBySearchBooks("harry potter"))
    }, [dispatch])

    return books?.items.map((book, i) => (
        <BookCard key={i} marked={!!book.marked} book={book}></BookCard>
    ))
}
