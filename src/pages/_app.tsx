import type { AppProps } from 'next/app';
import "../assets/materialize.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default MyApp;
