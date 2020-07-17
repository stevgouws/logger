import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { store } from "../store";
import { useRouter } from "next/router";
import { todayString } from "../utils";

const Save = () => {
  const { dispatch, state } = useContext(store);
  const [error, setError] = useState("");
  const router = useRouter();

  async function save() {
    setError("");
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
        {Object.entries(state).map(([key, value]) => {
          return (
            <div key={key}>
              {key}: {value}
            </div>
          );
        })}
      </div>
      <button onClick={save}>Save</button>
      {error}
    </Layout>
  );
};

export default Save;
