import { useContext } from "react";
import Layout from "../components/Layout";
import { store } from "../store";
import { useRouter } from "next/router";

const Save = () => {
  const { dispatch, state } = useContext(store);
  const router = useRouter();
  async function save() {
    const { ok, status, statusText } = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...state }),
    });
    if (!ok) throw new Error(`${status}: ${statusText}`);
    router.push("/done");
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
    </Layout>
  );
};

export default Save;
