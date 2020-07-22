import React from 'react';
import '../styles/reset.css';
import '../styles/global.sass';
import '../styles/style.sass';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
