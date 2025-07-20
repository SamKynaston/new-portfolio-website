import type { ReactNode } from "react";

export type Route = {
    path: string;
    element: ReactNode;
    name?: string; // Navigation Display. Will revert to path otherwise.
};