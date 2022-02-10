import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="font-inter font-base min-h-screen overflow-x-hidden bg-white">
      <Head>
        <title>Afifudin Abdullah - Homepage</title>
      </Head>
      {children}
    </div>
  );
}
