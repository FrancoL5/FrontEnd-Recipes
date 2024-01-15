import { useEffect, useState } from "react"
import { Volumens } from "../../interfaces/volumens.interface"
import { useCallVolumens } from "../../hooks/useCallData"
import { BookCard } from "../books/bookCard"

export function DisplayAllBoks() {
    const [books, setBooks] = useState<Volumens>()
    const { findByText } = useCallVolumens()
    useEffect(() => {
        findByText("").then((data) => setBooks(data))
    }, [])

    return books?.items.map((book, i) => (
        <BookCard key={i} marked={!!book.marked} book={book}></BookCard>
    ))
}
