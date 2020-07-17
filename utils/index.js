import { format } from "date-fns";

export const todayString = format(new Date(), "yyyy/MM/dd");
export const COLLECTION = process.env.FIREBASE_DB_COLLECTION;
