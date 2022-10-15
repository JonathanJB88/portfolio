import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider attribute="class">
        <div className="grid grid-cols-12 gap-6 px-5 py-14 lg:px-36 sm:px-24 md:px-28">
          <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
            <Sidebar />
          </div>
          <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
            <NavBar />
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default MyApp;
