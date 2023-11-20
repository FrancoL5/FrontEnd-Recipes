import { useEffect, useState } from "react"
import { useCallVolumens } from "../hooks/useCallData"
import { Volumens } from "../interfaces/volumens.interface"
import {  Heading, Stack } from "@chakra-ui/react"
import { BookCard } from "../Components/books/bookCard"

export function MyBooks() {
    const { findByText } = useCallVolumens()
    const [books, setBooks] = useState<Volumens>()

    useEffect(() => {
        findByText("").then((data) => setBooks(data))
    }, [])
    return (
        <Stack w="100%" alignItems="center" pt="5">
            <Heading size="lg">Mis Libros</Heading>
            {books?.items.map((book, i) => (
                <BookCard key={i} book={book}></BookCard>
            ))}
        </Stack>
    )
}
