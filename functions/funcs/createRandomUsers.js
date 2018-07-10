const firebase = require('./common/firebase');

module.exports = firebase.functions.https.onRequest((req, res) => {
  return firebase.admin.auth().createUser()
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully created new user:", userRecord.uid);
    return res.send('done!');
  })
  .catch((error) => {
    console.log("Error creating new user:", error);
    return res.send('error!');
  });
});

 // age: "user@example.com",
 // area: false,
//elonging: "+11234567890",
 // facebookID: "secretPassword",
 // firstName: "John Doe",
 // gender: "http://www.example.com/12345678/photo.png",
 // intro: "http://www.example.com/12345678/photo.png",
 // userImage: "http://www.example.com/12345678/photo.png",
 // useUID: "http://www.example.com/12345678/photo.png",
 // gender: "http://www.example.com/12345678/photo.png",
 // gender: "http://www.example.com/12345678/photo.png",
