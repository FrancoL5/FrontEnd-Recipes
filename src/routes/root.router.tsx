import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/navbar/navbar"
import { Flex, Stack } from "@chakra-ui/react"

export function RootRouter() {
    return (
        <Stack direction={["column", "row"]}>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </Stack>
    )
}
