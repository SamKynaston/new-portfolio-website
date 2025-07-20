import type { ReactNode } from "react";

export type Route = {
    path: string; // The path of the page in the browser (EG: http://EXAMPLE.COM/home)
    element: ReactNode; // The page itself, stored as <PAGE_NAME />
    name?: string; // Navigation Display. Will revert to path otherwise.
    ignore? : boolean; // Allows the navigation bar to ignore a specific route (such as for error messages)
};