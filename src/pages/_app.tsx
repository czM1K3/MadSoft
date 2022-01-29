import type { AppProps } from 'next/app';
import "../assets/materialize.scss";
import { NextIntlProvider } from 'next-intl';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
