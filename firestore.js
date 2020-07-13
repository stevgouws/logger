const admin = require("firebase-admin");

const serviceAccount = {
  type: process.env.NEXT_PUBLIC_FIREBASE_DB_type,
  project_id: process.env.NEXT_PUBLIC_FIREBASE_DB_project_id,
  private_key_id: process.env.NEXT_PUBLIC_FIREBASE_DB_private_key_id,
  private_key: process.env.NEXT_PUBLIC_FIREBASE_DB_private_key,
  client_email: process.env.NEXT_PUBLIC_FIREBASE_DB_client_email,
  client_id: process.env.NEXT_PUBLIC_FIREBASE_DB_client_id,
  auth_uri: process.env.NEXT_PUBLIC_FIREBASE_DB_auth_uri,
  token_uri: process.env.NEXT_PUBLIC_FIREBASE_DB_token_uri,
  auth_provider_x509_cert_url:
    process.env.NEXT_PUBLIC_FIREBASE_DB_auth_provider_x509_cert_url,
  client_x509_cert_url:
    process.env.NEXT_PUBLIC_FIREBASE_DB_client_x509_cert_url,
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
