const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore()
const User = db.collection('Users')
module.exports = User
