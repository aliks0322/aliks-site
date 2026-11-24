import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import '@/v2/v2.css';
import { AppV2 } from '@/v2/AppV2';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppV2 />
  </React.StrictMode>
);
