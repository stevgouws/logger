const admin = require("firebase-admin");

const serviceAccount = {
  type: process.env.FIREBASE_DB_TYPE,
  project_id: process.env.FIREBASE_DB_PROJECT_ID,
  private_key_id: process.env.FIREBASE_DB_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_DB_PRIVATE_KEY,
  client_email: process.env.FIREBASE_DB_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_DB_CLIENT_ID,
  auth_uri: process.env.FIREBASE_DB_AUTH_URI,
  token_uri: process.env.FIREBASE_DB_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.FIREBASE_DB_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_DB_CLIENT_X509_CERT_URL,
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export default admin.firestore();

export const Timestamp = admin.firestore.Timestamp;
