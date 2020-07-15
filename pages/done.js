import Page from "../components/Page";

const Done = () => {
  async function getEnv() {
    await fetch("/api/env", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <Page name="Done">
      Done :) <button onClick={getEnv}>env</button>
    </Page>
  );
};

export default Done;
