import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {} from './firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css'

const rootDiv = document.getElementById('root');
ReactDOM.render(
    <>
        <CssBaseline />
        <App />
    </>,
    rootDiv
);
