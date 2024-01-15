import { useEffect, useState } from "react"
import { useCallVolumens } from "../hooks/useCallData"
import { Volumens } from "../interfaces/volumens.interface"
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react"
import { BookCard } from "../Components/books/bookCard"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

export function MyBooks() {
    const books = useSelector((state: RootState) => state.books)
    
    return (
        <Stack alignItems="center" pt="5">
            <Heading size="lg">Mis Libros</Heading>
            <SimpleGrid columns={{ md: 1, lg: 2 }} spacing="1rem">
                {books?.map((book, i) => (
                    <BookCard marked = {!!book.marked} key={i} book={book}></BookCard>
                ))}
            </SimpleGrid>
        </Stack>
    )
}
