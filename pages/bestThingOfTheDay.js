import Page from "../components/Page";

export default function BestThingOfTheDay() {
  return (
    <Page name="best" nextUrl="save" onClick={() => null}>
      <p>What was the best thing physically today?</p>
    </Page>
  );
}
