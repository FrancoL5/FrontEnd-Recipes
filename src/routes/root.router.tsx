import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/navbar/navbar"
import { Flex } from "@chakra-ui/react"

export function RootRouter() {
    return (
        <Flex>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </Flex>
    )
}
