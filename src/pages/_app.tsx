import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
import "@fortawesome/fontawesome-free/css/all.min.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <div data-theme="myTheme">
    <Component {...pageProps} />
  </div>
}

export default MyApp;
