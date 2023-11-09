/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'

function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default App
