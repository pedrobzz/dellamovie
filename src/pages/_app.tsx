import type { AppProps } from "next/app";
import "../common/styles/login.css"


import { AppContextProvider } from "../common/context/appContext";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
};

export default App;
