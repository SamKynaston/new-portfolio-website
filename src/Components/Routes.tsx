import type {Page} from "../Types/Page.ts";
import Home from "../Pages/Home";
import Error404 from "../Pages/404.tsx";

export const pages: Page[] = [
    { title: "Home", path: "/", element: <Home /> },
    { title: "Home", path: "/t", element: <Home /> },
    { title: "404", path: "*", element: <Error404 />, ignore: false },
];