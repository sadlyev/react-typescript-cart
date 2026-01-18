import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavigateApp } from './react-components/Navigation';
import "./styles.scss";

createRoot(document.querySelector('.root')!).render(
  <StrictMode>
    <NavigateApp/>
  </StrictMode>,
)

