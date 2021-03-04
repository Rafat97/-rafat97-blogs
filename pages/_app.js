import ThemeContextProvider from "../components/ThemeSwitch/ThemeContextProvider";
import "../styles/globals.css";
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
  // Some page has started loading
  console.log("onRouteChangeStart");
};

Router.onRouteChangeComplete = (url) => {
  // Some page has finished loading
  console.log("onRouteChangeComplete");
};

Router.onRouteChangeError = (err, url) => {
  // an error occurred.
  console.log("onRouteChangeError");
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
