import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ProvideFilter } from "context/filter";
import { ProvideSection } from "context/section";

import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="hidden lg:block w-12 h-12 opacity-0 pointer-events-none rounded-full border-2 border-marrsgreen dark:border-carrigreen z-[9999] fixed -translate-x-1/2 -translate-y-1/2"
      />
      <ThemeProvider attribute="class">
        <ProvideFilter>
          <ProvideSection>
            <Component {...pageProps} />
          </ProvideSection>
        </ProvideFilter>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
