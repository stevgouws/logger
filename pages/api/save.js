import db, { Timestamp } from "../../firestore";
import { format } from "date-fns";
import { COLLECTION } from "../../utils";

export default async ({ body: { ...args } }, res) => {
  const response = await db
    .collection(COLLECTION)
    .doc()
    .set({
      timestamp: Timestamp.fromDate(new Date()),
      date: format(new Date(), "yyyy/MM/dd"),
      ...args,
    });
  res.statusCode = 200;
  res.json({ response });
};
