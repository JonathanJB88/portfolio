import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 py-14 lg:px-36 sm:px-24 md:px-28">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
