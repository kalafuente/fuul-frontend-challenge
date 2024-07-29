import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="icon" href="https://cdn.prod.website-files.com/636fea919b96f729afeb9bf3/637d0a0ff5b5d508fcbb01e2_color_fav.png" />
      <title>Fuul Frontend Code Challenge</title>
      <meta name="description" content="Fuul Frontend Code Challenge" />
    </Head>
    <Component {...pageProps} />
  </>
}
