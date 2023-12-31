import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootRouter } from "./routes/root.router.tsx"
import { NotFound } from "./notFound.tsx"
import App from "./App.tsx"
import { theme } from "./utils/theme.ts"
import { MyBooks } from "./routes/myBooks.router.tsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootRouter />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <App></App> },
            { path: "myBooks", element: <MyBooks></MyBooks> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
)
