import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Moon, Sun } from "react-feather";
import useTheme from "../lib/useTheme";

export default function Navbar() {
  const router = useRouter();
  const [theme, toggleDarkMode] = useTheme();

  return (
    <div className="fixed top-0 w-full bg-opacity-50 border-b dark:border-b-neutral-800 backdrop-blur-md">
      <div className="max-w-3xl m-auto flex items-center justify-between px-8 py-2">
        <Link href="/">
          <a className="font-eudoxus font-bold text-lg tracking-tight">
            Afifudin Abdullah
          </a>
        </Link>
        <div className="flex items-center justify-end gap-4 text-sm font-medium">
          <Link href="/works" scroll={false}>
            <a
              className={`px-2 py-1 rounded ${
                router.pathname.includes("works")
                  ? "bg-blue-100 dark:bg-amber-100 text-blue-600 dark:text-[#202023]"
                  : "hover:bg-blue-100 dark:hover:bg-amber-100 dark:hover:text-[#202023] transition-all duration-300"
              }`}
            >
              Works
            </a>
          </Link>
          <Link href="/posts" scroll={false}>
            <a
              className={`px-2 py-1 rounded ${
                router.pathname.includes("posts")
                  ? "bg-blue-100 dark:bg-amber-100 text-blue-600 dark:text-[#202023]"
                  : "hover:bg-blue-100 dark:hover:bg-amber-100 dark:hover:text-[#202023] transition-all duration-300"
              }`}
            >
              Posts
            </a>
          </Link>
          <Link href="/source" scroll={false}>
            <a
              className={`px-2 py-1 rounded ${
                router.pathname.includes("source")
                  ? "bg-blue-100 dark:bg-amber-100 text-blue-600 dark:text-[#202023]"
                  : "hover:bg-blue-100 dark:hover:bg-amber-100 dark:hover:text-[#202023] transition-all duration-300"
              }`}
            >
              Source
            </a>
          </Link>
          <div className="relative h-10">
            {theme === "light" ? (
              <AnimatePresence>
                <motion.button
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0, y: -75 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 75 },
                  }}
                  onClick={toggleDarkMode}
                  className="absolute hidden sm:flex rounded-md w-10 h-10 outline-none items-center justify-center bg-violet-600"
                >
                  <Moon className="h-5 w-5 text-neutral-200" />
                </motion.button>
              </AnimatePresence>
            ) : (
              <AnimatePresence>
                <motion.button
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0, y: -75 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 75 },
                  }}
                  onClick={toggleDarkMode}
                  className="absolute hidden sm:flex rounded-md w-10 h-10 outline-none items-center justify-center bg-amber-100"
                >
                  <Sun className="h-5 w-5 text-[#202023]" />
                </motion.button>
              </AnimatePresence>
            )}
          </div>
        </div>
        <button className="sm:hidden rounded-md w-10 h-10 outline-none flex items-center justify-center bg-white">
          <Menu className="h-5 w-5 text-[#202023]" />
        </button>
      </div>
    </div>
  );
}
