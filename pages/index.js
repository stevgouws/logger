import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logger</title>
        <link rel="icon" href="/chart.svg" />
      </Head>
      <Layout>
        <h1>Testerama</h1>
      </Layout>
    </div>
  );
}
