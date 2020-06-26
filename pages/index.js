import Head from "next/head";
import Layout from "../components/Layout";
// import { container } from "../styles/global.styl";

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
