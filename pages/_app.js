import '../styles/globals.css'
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from '../contexts';

export default function App({ Component, pageProps }) {
  return <Provider><Component {...pageProps} /></Provider>
}
