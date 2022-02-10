import { GlobalProvider } from "../lib/GlobalContext";
import Layout from "../components/layouts/main";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <GlobalProvider>
      <Layout>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
