import Theme from '../styles/theme';
import '../styles/globals.scss';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 