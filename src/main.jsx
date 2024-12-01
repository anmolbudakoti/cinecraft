import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieContextState, { MovieContext } from './context/index.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <MovieContextState>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MovieContextState>
)
