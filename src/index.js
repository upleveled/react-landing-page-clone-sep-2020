import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        /* Use better layout model (border-box) */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 60px 0 0;
          font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.485;
          color: #4a4a4a;
        }

        button {
          line-height: 1.42857143;
          cursor: pointer;
        }

        p {
          margin-top: 0;
          color: #9896a4;
          font-size: 21.6px;
          font-weight: 300;
        }

        h1,
        h2 {
          margin-top: 0;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 15px;
          line-height: 1.1;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
