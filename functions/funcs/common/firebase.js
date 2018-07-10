const functions = require('firebase-functions');
const admin = require('firebase-admin');

let serviceAccount;
if (process.env.NODE_ENV === 'test') {
  serviceAccount = require('./keys/unicon-test-runtime-key.json');
} else {
  serviceAccount = functions.config().unicon.cert;
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.GCLOUD_PROJECT}.firebaseio.com`,
});

const db = admin.firestore();

const firebase = {
  functions,
  admin,
  db
};

module.exports = firebase;
