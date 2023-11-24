import { Box, Button, Collapse, Flex, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { FiArrowDown, FiArrowUp } from "react-icons/fi"

export function ResumeText({ children }: { children: string }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Collapse in={open} startingHeight={50}>
                {children}
            </Collapse>
            <IconButton
                variant={"outline"}
                mt={3}
                colorScheme="teal"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Open Text"
                icon={
                    !open ? (
                        <FiArrowDown></FiArrowDown>
                    ) : (
                        <FiArrowUp></FiArrowUp>
                    )
                }
            ></IconButton>
        </>
    )
}
