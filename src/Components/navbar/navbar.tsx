import { FiMenu, FiBookOpen, FiSearch } from "react-icons/fi"
import { Box, Button, MenuIcon, Stack, defineStyle } from "@chakra-ui/react"

export function NavBar() {
    const style = defineStyle({
        bg: "transparent",
        color: "black",
        _hover: { bg: "blackAlpha.100" },
        _active: { bg: "blackAlpha.500" },
    })
    return (
        <Box bg="teal" p="5" h="98dvh" mt="1dvh" borderRadius="lg">
            <Stack spacing={10} pt="2">
                <Button {...style} leftIcon={<FiMenu></FiMenu>}>
                    Inicio
                </Button>
                <Button {...style} leftIcon={<FiBookOpen></FiBookOpen>}>
                    Mis Libros
                </Button>
                <Button {...style} leftIcon={<FiSearch></FiSearch>}>
                    Buscar
                </Button>
            </Stack>
        </Box>
    )
}
