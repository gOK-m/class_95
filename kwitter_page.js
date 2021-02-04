//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBvCGco39MDidaJJISBLqDkGL2KSbl0B9k",
      authDomain: "kwitter-3bf4c.firebaseapp.com",
      databaseURL: "https://kwitter-3bf4c-default-rtdb.firebaseio.com",
      projectId: "kwitter-3bf4c",
      storageBucket: "kwitter-3bf4c.appspot.com",
      messagingSenderId: "579796543677",
      appId: "1:579796543677:web:e9d5038f6612a192f1efd4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}