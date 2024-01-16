import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    IconButton,
} from "@chakra-ui/react"
import { Item } from "../../interfaces/volumens.interface"
import { ResumeText } from "../../utils/resumeText"
import { MenuActionsBooks } from "./menuActions"
import { FiBookmark } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { toggleBookMark } from "../../app/books/booksSlice"
export function BookCard({ book, marked }: { book: Item; marked?: boolean }) {
    const dispatch = useDispatch()

    return (
        <Card variant="outline" marginInline="5" h="fit-content">
            <CardHeader paddingX={0} paddingY={1}>
                <Flex gap={4} justifyContent="space-between" alignItems="center">
                    <IconButton
                        size="lg"
                        aria-label="readIt"
                        variant="ghost"
                        colorScheme={(marked  && "teal") || "gray"}
                        isRound
                        onClick={() => dispatch(toggleBookMark(book))}
                    >
                        <FiBookmark></FiBookmark>
                    </IconButton>
                    <Heading
                        size={["sm", "md"]}
                        display="flex"
                        // gap="0.5rem"
                        // flexWrap="wrap"
                    >
                        {book.volumeInfo.title}
                    </Heading>
                    <div>
                        <MenuActionsBooks book={book}></MenuActionsBooks>
                    </div>
                </Flex>
            </CardHeader>
            <CardBody  paddingInline={3}>
                <ResumeText>{book.volumeInfo.description}</ResumeText>
            </CardBody>
        </Card>
    )
}
