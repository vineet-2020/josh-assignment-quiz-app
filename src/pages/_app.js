// _app.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the import path to match your project
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
