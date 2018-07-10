const firebase = require('./common/firebase');
const uid = require('uid-safe')
const random = require('random-name')

module.exports = firebase.functions.https.onRequest((req, res) => {
  const additionalNum = req.body.addition;
  const batch = firebase.db.batch();
  for (i = 0; i < additionalNum; i++) {
    const userRef = firebase.db.collection("users").doc(uid.sync(21));
    batch.set(userRef, {name: random()});
  } 
  return batch.commit()
    .then(() =>  {
      return res.send('Random users were successfully created!')
    })
    .catch((err) => {
      console.error("Error creating new user:", err);
      return res.send('error!');
    });
})
