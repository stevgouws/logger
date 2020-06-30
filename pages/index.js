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
