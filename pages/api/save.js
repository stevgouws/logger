import db, { Timestamp } from "../../firestore";

export default async ({ body: { neck, thoracic, leftHip } }, res) => {
  const response = await db
    .collection("log")
    .doc()
    .set({
      date: Timestamp.fromDate(new Date()),
      neck,
      thoracic,
      leftHip,
    });
  res.statusCode = 200;
  res.json({ response });
};
