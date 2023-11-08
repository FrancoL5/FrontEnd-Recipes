import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootRouter } from "./routes/root.router.tsx"
import { NotFound } from "./notFound.tsx"
const router = createBrowserRouter([
    { path: "/", element: <RootRouter />, errorElement: <NotFound /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
)
