import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import Page from "../components/Page";
import { store } from "../store";
import { useRouter } from "next/router";
import { todayString } from "../utils";
import styles from "./save.styl";

const DataGrid = ({ state }) => (
  <div>
    {Object.entries(state).map(([key, value]) => {
      return (
        <div className={styles.data} key={key}>
          <div className={styles.key}>{key}</div>
          <div className={styles.value}>{value}</div>
        </div>
      );
    })}
  </div>
);

DataGrid.propTypes = {
  state: PropTypes.object.isRequired,
};

const Message = ({ text }) => {
  if (!text) return null;
  return <div className={styles.message}>{text}</div>;
};

Message.propTypes = {
  text: PropTypes.string,
};

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
    setBusy("Saving...");
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

  useEffect(() => {
    save();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page name="summary" hideNav>
      <div className={styles.mid}>
        <DataGrid state={state}></DataGrid>
        <Message text={error || busy} />
      </div>
    </Page>
  );
};

export default Save;
