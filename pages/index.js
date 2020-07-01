import Head from "next/head";
import Layout from "../components/Layout";
import Field from "../components/Field";
import Fields from "../components/Fields";
import BigButton from "../components/BigButton";
import NextButton from "../components/NextButton";
import NumberGrid from "../components/NumberGrid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logger</title>
        <link rel="icon" href="/chart.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />
        <link href="/start-up.png" rel="apple-touch-startup-image" />
      </Head>
      <Layout>
        <h1>Neck</h1>
        <NumberGrid />
        <NextButton />
        {/* <Fields>
          <Field title="Date"></Field>
          <Field title="Neck"></Field>
          <Field title="Thoracic"></Field>
          <Field title="Left Hip"></Field>
          <Field title="Paracetemol"></Field>
          <Field title="Ibuprofen"></Field>
        </Fields> */}
      </Layout>
    </div>
  );
}
