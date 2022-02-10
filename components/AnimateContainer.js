import { AnimatePresence, motion } from "framer-motion";

export default function AnimateContainer({ delay, children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 1 }}
        exit={{ opacity: 0, y: 50 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
