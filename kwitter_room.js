
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCvdEtBmf0AQ04_7DvP37_4cp6K6g312sI",
      authDomain: "kwitter-6d36e.firebaseapp.com",
      projectId: "kwitter-6d36e",
      storageBucket: "kwitter-6d36e.appspot.com",
      messagingSenderId: "600356616668",
      appId: "1:600356616668:web:b1b9b801ee576602da3719",
      measurementId: "G-XQLLSR3HF9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
