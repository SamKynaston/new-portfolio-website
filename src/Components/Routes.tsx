import type {Route} from "../Types/Routes.ts";
import Home from "../Pages/Home";
import Error404 from "../Pages/404.tsx";

export const routes: Route[] = [
    { path: "/", element: <Home />, name: "Home" },
    { path: "*", element: <Error404 />, name: "404" },
];