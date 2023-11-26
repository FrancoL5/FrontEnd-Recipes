import { FiMenu, FiBookOpen, FiSearch } from "react-icons/fi"
import { Box, Button, Collapse, Stack, defineStyle } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export function NavBar() {
    const [openCollapse, setOpenCollapse] = useState(true)
    const navigate = useNavigate()
    const style = defineStyle({
        bg: "transparent",
        color: "black",
        _hover: { bg: "blackAlpha.100" },
        _active: { bg: "blackAlpha.500" },
    })

    return (
        <Box>
            <Stack
                direction={["row", "column"]}
                bg="teal"
                p="5"
                h="100%"
                maxH="100dvh"
                alignItems="center"
                // w="40dvw"
                // mt="1dvh"
                borderRadius="lg"
                position="sticky"
                top="0"
                // flex={1}
            >
                <Button
                    size={["sm", "md"]}
                    onClick={() => setOpenCollapse((prev) => !prev)}
                >
                    {!openCollapse ? "Abrir" : "Cerrar"}
                </Button>
                <Collapse in={openCollapse} animateOpacity>
                    <Stack
                        direction={["row", "column"]}
                        alignItems="center"
                        spacing={10}
                        pt="2"
                    >
                        <Button
                            onClick={() => navigate("/")}
                            {...style}
                            leftIcon={<FiMenu></FiMenu>}
                        >
                            Inicio
                        </Button>
                        <Button
                            onClick={() => navigate("/myBooks")}
                            {...style}
                            leftIcon={<FiBookOpen></FiBookOpen>}
                        >
                            Mis Libros
                        </Button>
                        <Button {...style} leftIcon={<FiSearch></FiSearch>}>
                            Buscar
                        </Button>
                    </Stack>
                </Collapse>
            </Stack>
        </Box>
    )
}
