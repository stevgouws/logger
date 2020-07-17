const admin = require("firebase-admin");

const serviceAccount = {
  type: process.env.FIREBASE_DB_TYPE,
  project_id: process.env.FIREBASE_DB_PROJECT_ID,
  private_key_id: process.env.FIREBASE_DB_PRIVATE_KEY_ID,
  private_key:
    process.env.NODE_ENV === "production"
      ? JSON.parse(process.env.FIREBASE_DB_PRIVATE_KEY)
      : process.env.FIREBASE_DB_PRIVATE_KEY, // For Vercel hosting env value should be pasted with quotes, "", essentially double-double-quoting it and JSON parsed to work
  client_email: process.env.FIREBASE_DB_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_DB_CLIENT_ID,
  auth_uri: process.env.FIREBASE_DB_AUTH_URI,
  token_uri: process.env.FIREBASE_DB_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.FIREBASE_DB_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_DB_CLIENT_X509_CERT_URL,
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin.firestore();

export const Timestamp = admin.firestore.Timestamp;
