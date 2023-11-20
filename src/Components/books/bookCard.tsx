import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react"
import { Item } from "../../interfaces/volumens.interface"
import { ResumeText } from "../../utils/resumeText"

export function BookCard({ book }: { book: Item }) {
    return (
        <Card variant="outline" marginInline="5">
            <CardHeader>
                <Heading size="md">{book.volumeInfo.title}</Heading>
            </CardHeader>
            <CardBody>
                <ResumeText>{book.volumeInfo.description}</ResumeText>
            </CardBody>
        </Card>
    )
}
