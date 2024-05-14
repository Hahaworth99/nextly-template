import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import React from "react";
import Layout from "./layout";

function MyApp({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
