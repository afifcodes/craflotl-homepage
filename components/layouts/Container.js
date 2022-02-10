import { AnimatePresence, motion } from "framer-motion";

export default function Container({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 75, duration: 0.5 }}
        exit={{ opacity: 0, y: 50 }}
        className="max-w-xl m-auto pb-8 px-8 pt-20"
      >
        {children}
      </motion.div>
      ;
    </AnimatePresence>
  );
}
