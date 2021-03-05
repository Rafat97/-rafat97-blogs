import dynamic from 'next/dynamic'
import ThemeContextProvider from "../components/ThemeSwitch/ThemeContextProvider";
import "../styles/globals.css";
import'../styles/topProgress.css'

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <TopProgressBar />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
