import {Link} from "react-router-dom";
import type { NavigationProps } from "../Types/Interfaces/NavigationProps.ts";

function Navigation({ pages }: NavigationProps) {
    return (
        <>
            {pages.map(page =>
                page.ignore !== true && (
                    <Link to={page.path} key={page.path}>
                        {page.title ?? page.path}
                    </Link>
                )
            )}
        </>
    )
}

export default Navigation