import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

// HashRouter é usado no build standalone (arquivo único aberto via file://),
// onde o history API do BrowserRouter não funciona. Caso contrário, BrowserRouter.
const useHash = import.meta.env.VITE_ROUTER === 'hash';

const router = useHash ? (
  <HashRouter>
    <App />
  </HashRouter>
) : (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>{router}</ThemeProvider>
  </StrictMode>,
);
