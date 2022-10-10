import Cart from "../components/Cart/Cart";
import Countries from "../components/Countries";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        loader: async () => {
            return fetch('https://restcountries.com/v3.1/all')
        },
        element: <Countries></Countries>
    },
    {
        path: '/country/:name',
        loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
        },
        element: <Cart></Cart>
    },
])