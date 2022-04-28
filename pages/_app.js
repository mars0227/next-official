import 'bulma/css/bulma.css';
import 'react-image-gallery/styles/css/image-gallery.css';

import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}