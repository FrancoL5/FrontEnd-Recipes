import {
    Button,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"
import { Item } from "../../interfaces/volumens.interface"

export function MenuActionsBooks({ book }: { book: Item }) {
    return (
        <Menu >
            <MenuButton  as={Button}
            size="lg"
            variant="ghost"
            colorScheme="teal"
            aria-label="Menu">
                <FiMenu></FiMenu>
            </MenuButton>
            <MenuList>
                <MenuItem> Buscar en google</MenuItem>
                <MenuItem> Marcar Como Leído</MenuItem>
                <MenuItem>
                    <Link href={book?.saleInfo?.buyLink}>
                        {book?.saleInfo?.buyLink
                            ? "Link De Compra"
                            : "Compra no disponible"}
                    </Link>
                </MenuItem>
                <MenuItem> Eliminar</MenuItem>
            </MenuList>
        </Menu>
    )
}
