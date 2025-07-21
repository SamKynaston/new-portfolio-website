import type { JSX } from "react";
import type { PageProps } from "../Types/Interfaces/PapeProps.ts";

function Page({ children }: PageProps): JSX.Element {
    return (
        <div className="Content">
            { children }
        </div>
    )
}

export default Page;