import type { AppProps } from "next/app";

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
