import Layout from "../components/Layout";
import NextButton from "../components/NextButton";
import { useState } from "react";
import Page from "../components/Page";

export default function Home() {
  const [nextUrl, setNextUrl] = useState("neck");

  return (
    <Layout>
      <Page name="neck" nextUrl="thoracic" />
      {/* <div>
        <button onClick={() => setNextUrl("meds")}>Log Meds</button>
        <button onClick={() => setNextUrl("neck")}>Log Stats</button>
      </div> */}
      <NextButton nextUrl={nextUrl}></NextButton>
    </Layout>
  );
}
