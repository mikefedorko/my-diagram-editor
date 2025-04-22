import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import DiagramEditor from './DiagramEditor';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DiagramEditor />
  </StrictMode>
);
