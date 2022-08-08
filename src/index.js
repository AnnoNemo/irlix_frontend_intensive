import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@src/app';

const ROOT = ReactDOM.createRoot(document.getElementById('root'));
ROOT.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
