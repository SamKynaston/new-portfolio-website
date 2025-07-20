import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Navigation from './Components/Navigation.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Navigation />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </Router>
    </StrictMode>,
)