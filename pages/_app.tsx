import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import React from "react";

function MyApp({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
