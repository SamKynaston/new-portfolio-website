import type {Route} from "../Types/Routes.ts";
import {Link} from "react-router-dom";

interface NavigationProps {
    pages: Route[];
}

function Navigation({ pages }: NavigationProps) {
    return (
        <>
            {pages.map((page: Route) => {
                return (<Link to={page.path} key={page.path}>
                    {page.name ?? page.path}
                </Link>)
            })}
        </>
    )
}

export default Navigation