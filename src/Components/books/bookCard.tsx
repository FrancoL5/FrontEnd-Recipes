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

export function BookCard({ book }: { book: Item }) {
    return (
        <Card variant="outline" marginInline="5">
            <CardHeader pb={1}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Heading
                        size={["sm", "md"]}
                        display="flex"
                        alignItems="center"
                        // gap="0.5rem"
                        // flexWrap="wrap"
                    >
                        <IconButton
                            size="lg"
                            aria-label="readIt"
                            variant="ghost"
                            isRound
                        >
                            <FiBookmark></FiBookmark>
                        </IconButton>
                        {book.volumeInfo.title}
                    </Heading>
                    <MenuActionsBooks book={book}></MenuActionsBooks>
                </Flex>
            </CardHeader>
            <CardBody>
                <ResumeText>{book.volumeInfo.description}</ResumeText>
            </CardBody>
        </Card>
    )
}
