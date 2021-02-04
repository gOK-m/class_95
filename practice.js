
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvCGco39MDidaJJISBLqDkGL2KSbl0B9k",
    authDomain: "kwitter-3bf4c.firebaseapp.com",
    databaseURL: "https://kwitter-3bf4c-default-rtdb.firebaseio.com",
    projectId: "kwitter-3bf4c",
    storageBucket: "kwitter-3bf4c.appspot.com",
    messagingSenderId: "579796543677",
    appId: "1:579796543677:web:e9d5038f6612a192f1efd4"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }