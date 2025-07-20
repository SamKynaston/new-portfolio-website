import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './Components/Navigation.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {routes} from './Components/Routes.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Navigation pages={routes} />
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)