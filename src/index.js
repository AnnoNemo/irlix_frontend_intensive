import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '@src/store';
import App from '@src/App';

const ROOT = ReactDOM.createRoot(document.getElementById('root'));
ROOT.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);
