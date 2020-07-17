import db from "../../firestore";
import { COLLECTION } from "../../utils";

export default async ({ body: { date } }, res) => {
  const snapshot = await db
    .collection(COLLECTION)
    .where("date", "==", date)
    .get();

  let result = [];
  snapshot.forEach((doc) => result.push(doc.data()));

  if (result.length < 1) sendFail(res);
  else sendSuccess(res, result);
};

function sendSuccess(res, result) {
  res.statusCode = 200;
  res.json({ data: result });
}

function sendFail(res) {
  res.statusCode = 404;
  res.json({ data: null });
}
