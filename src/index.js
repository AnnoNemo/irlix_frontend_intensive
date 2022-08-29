import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '@src/store';
import App from '@src/App';

const ROOT = ReactDOM.createRoot(document.getElementById('root'));
ROOT.render(
    <Provider store={store}>
        <HashRouter basename="/irlix_frontend_intensive">
            <App />
        </HashRouter>
    </Provider>
);
