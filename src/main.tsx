import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootRouter } from "./routes/root.router.tsx"
import { NotFound } from "./notFound.tsx"
import App from "./App.tsx"
import { theme } from "./utils/theme.ts"
import { MyBooks } from "./routes/myBooks.router.tsx"
import { Provider } from "react-redux"
import { store } from "./app/store.ts"
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
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />
            </ChakraProvider>
        </Provider>
)
