import { GlobalProvider } from "../lib/GlobalContext";
import Layout from "../components/layouts/main";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
