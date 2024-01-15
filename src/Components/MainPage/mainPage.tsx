import { Grid, Heading, Stack } from "@chakra-ui/react"
import { DisplayAllBoks } from "./displayAllBoks"

export function MainPage() {
    return (
        <Stack w="100%" alignItems="center" pt="1dvh" gap="5rem">
            <Heading>Página Principal</Heading>

            <Heading size="md"> Libros disponibles</Heading>

            <Grid templateColumns="repeat(2, 1fr)" gap={4} >
                <DisplayAllBoks></DisplayAllBoks>
            </Grid>
        </Stack>
    )
}
