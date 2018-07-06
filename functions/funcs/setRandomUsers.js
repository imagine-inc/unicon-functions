const functions = require('firebase-functions');

module exports helloWorld = functions.https.onRequest((req, res) => {
  response.send("Hello from Firebase!");
});
