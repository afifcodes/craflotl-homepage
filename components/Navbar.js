import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, Moon, Sun } from "react-feather";
import useTheme from "../lib/useTheme";

export default function Navbar() {
  const router = useRouter();
  const [theme, toggleDarkMode] = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full bg-opacity-50 border-b dark:border-b-neutral-800 backdrop-blur-md">
      <div className="max-w-3xl m-auto flex items-center justify-between px-4 sm:px-8 py-2">
        <div className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 group-hover:-rotate-6 transition-all">
            {theme === "light" ? (
              <Image
                src="/icon_dark.png"
                layout="fill"
                className="object-contain"
                alt="icon_dark"
              />
            ) : (
              <Image
                src="/icon_light.png"
                layout="fill"
                className="object-contain"
                alt="icon_dark"
              />
            )}
          </div>
          <Link href="/">
            <a className="font-eudoxus font-bold text-lg tracking-tight">
              Afifudin Abdullah
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex items-center justify-end gap-4 text-sm font-medium">
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
          <div className="relative h-10 w-10">
            <AnimatePresence>
              {theme === "light" && (
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
              )}
            </AnimatePresence>
            <AnimatePresence>
              {theme === "dark" && (
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
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="relative sm:hidden">
          <div className="flex items-center justify-end gap-2">
            <div className="relative h-10 w-10">
              <AnimatePresence>
                {theme === "light" && (
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
                    className="absolute flex rounded-md w-10 h-10 outline-none items-center justify-center bg-violet-600"
                  >
                    <Moon className="h-5 w-5 text-neutral-200" />
                  </motion.button>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {theme === "dark" && (
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
                    className="absolute flex rounded-md w-10 h-10 outline-none items-center justify-center bg-amber-100"
                  >
                    <Sun className="h-5 w-5 text-[#202023]" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={toggleMenu}
              className="sm:hidden rounded-md w-10 h-10 outline-none flex items-center justify-center bg-white dark:bg-neutral-800 hover:bg-blue-50 dark:hover:bg-neutral-900 transition-all"
            >
              <Menu className="h-5 w-5 text-[#202023] dark:text-neutral-200" />
            </button>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                  initial: { opacity: 0, x: 75 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 75 },
                }}
                className="absolute right-0 top-12 w-48 bg-white shadow border dark:border-neutral-800 dark:bg-neutral-800 rounded p-1"
              >
                <div className="flex flex-col sm:hidden items-center gap-2 text-sm font-medium">
                  <Link href="/works" scroll={false}>
                    <a
                      className={`p-2 block w-full rounded ${
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
                      className={`p-2 block w-full rounded ${
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
                      className={`p-2 block w-full rounded ${
                        router.pathname.includes("source")
                          ? "bg-blue-100 dark:bg-amber-100 text-blue-600 dark:text-[#202023]"
                          : "hover:bg-blue-100 dark:hover:bg-amber-100 dark:hover:text-[#202023] transition-all duration-300"
                      }`}
                    >
                      Source
                    </a>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
