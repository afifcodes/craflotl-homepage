import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="font-inter font-base min-h-screen overflow-x-hidden bg-white dark:bg-[#202023] text-[#202023] dark:text-neutral-200 transition-all">
      <Head>
        <title>Afifudin Abdullah - Homepage</title>
      </Head>
      {children}
    </div>
  );
}
