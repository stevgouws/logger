import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { store } from "../store";
import { useRouter } from "next/router";
import { todayString } from "../utils";

const Save = () => {
  const { dispatch, state } = useContext(store);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState("");
  const router = useRouter();

  function reset() {
    setError("");
    setBusy("");
  }

  async function save() {
    reset();
    setBusy("Loading...");
    if (await alreadyHasDataForDate()) {
      setError("You've already logged data for today");
      return;
    }
    const { ok, status, statusText } = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...state }),
    });
    if (!ok) setError(`${status}: ${statusText}`);
    else router.push("/done");
  }

  async function getDate(date = todayString) {
    const response = await fetch("/api/getDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date }),
    });
    const json = await response.json();
    return json.data;
  }

  async function alreadyHasDataForDate() {
    const records = await getDate();
    return !!records;
  }

  return (
    <Layout>
      <div>
        <h1>Summary</h1>
        <div>
          {Object.entries(state).map(([key, value]) => {
            return (
              <div key={key}>
                {key}: {value}
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={save}>Save</button>
      {error || busy}
      {/* <NextButton nextUrl={nextUrl} onClick={updateState} /> */}
    </Layout>
  );
};

export default Save;
