import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './Components/Navigation.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pages } from './Components/Routes.tsx'
import "./Styles/tailwind.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Navigation pages={pages} />
            <Routes>
                {pages.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
            {/* Placeholder for the footer */}
            <Navigation pages={pages} />
        </BrowserRouter>
    </StrictMode>,
)