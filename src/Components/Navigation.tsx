import {Link} from "react-router-dom";
import type { NavigationProps } from "../Types/Interfaces/NavigationProps.ts";

function Navigation({ pages }: NavigationProps) {
    return (
        <div className="Navigation">
            {pages.map(page =>
                page.ignore !== true && (
                    <Link to={page.path} key={page.path} className="Navigation-Button">
                        {page.title ?? page.path}
                    </Link>
                )
            )}
        </div>
    )
}

export default Navigation