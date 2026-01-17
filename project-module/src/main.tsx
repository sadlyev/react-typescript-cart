import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RegisterApp} from "./react-components/registration/LoginIn"
import "./styles.scss";

createRoot(document.querySelector('.root')!).render(
  <StrictMode>
    <RegisterApp/>
  </StrictMode>,
)

