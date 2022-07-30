import type { AppProps } from "next/app";
import "../common/styles/login.css";
import "../common/styles/globals.css";

import { AppContextProvider } from "../common/context/appContext";
import { AuthContextProvider } from "../common/context/authContext";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "./api/trpc/[trpc]";
import React from "react";
import BaseLayout from "../common/layouts/baseLayout";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  // https://stackoverflow.com/questions/71809903/next-js-component-cannot-be-used-as-a-jsx-component
  const TypedComponent = Component as unknown as React.FC;
  return (
    <>
      <AppContextProvider>
        <AuthContextProvider>
          <BaseLayout>
            <TypedComponent {...pageProps} />
          </BaseLayout>
        </AuthContextProvider>
      </AppContextProvider>
    </>
  );
};

export default withTRPC<AppRouter>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(App);
