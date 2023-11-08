import { Text, Link, VStack } from "@chakra-ui/react"
export function NotFound() {
    return (
        <VStack gap="5rem">
            <Text as="u" fontSize="4xl">
                Page not Found
            </Text>
            <Text fontSize="3xl">An error ocurred</Text>
            <Link color="salmon" href="/">
                Main Page
            </Link>
        </VStack>
    )
}
