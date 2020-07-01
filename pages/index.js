import { useState } from "react";
import styles from "./index.styl";
import Head from "next/head";
import Layout from "../components/Layout";
import Field from "../components/Field";
import Fields from "../components/Fields";
import BigButton from "../components/BigButton";
import NextButton from "../components/NextButton";
import NumberGrid from "../components/NumberGrid";

export default function Home() {
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <div>
      <Head>
        <title>Logger</title>
        <link rel="icon" href="/chart.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <!-- iPhone 8, 7, 6s, 6 (750px x 1334px) -->  */}
        <link
          rel="apple-touch-startup-image"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          href="/apple-launch-750x1334.png"
        />
      </Head>
      <Layout>
        <h1>Neck</h1>
        <div className={styles.numberBanner}>{selectedNumber}</div>
        <NumberGrid
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
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
