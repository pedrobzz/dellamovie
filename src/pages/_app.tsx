import type { AppProps } from "next/app";
import "../common/styles/login.css";
import "../common/styles/globals.css";

import { AppContextProvider } from "../common/context/appContext";
import { AuthContextProvider } from "../common/context/authContext";
import Header from "../common/components/Header";
import Navigation from "../common/components/Navigation";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <AppContextProvider>
        <AuthContextProvider>
          <Header />
          <Component {...pageProps} />
          <Navigation />
        </AuthContextProvider>
      </AppContextProvider>
    </>
  );
};

export default App;
