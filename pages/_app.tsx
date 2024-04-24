import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }:AppProps ) {
  return (
    <>
      <Component { ...pageProps } />
      <Script src='https://static.matterport.com/showcase-sdk/latest.js' />
    </>
  )
}