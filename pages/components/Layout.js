import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default Layout;
