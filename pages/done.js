import { useContext } from "react";
import Layout from "../components/Layout";
import { store } from "../store";

async function save(state) {
  await fetch("/api/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...state }),
  });
}

const Done = () => {
  const { dispatch, state } = useContext(store);

  return (
    <Layout>
      Done :)
      <button onClick={() => save(state)}>Save</button>
    </Layout>
  );
};

export default Done;
