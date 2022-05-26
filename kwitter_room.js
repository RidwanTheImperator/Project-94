
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAhp1d2gQycN19v9DyPCxkpNI-osVQ3LRk",
      authDomain: "rid-s-chat-app.firebaseapp.com",
      databaseURL: "https://rid-s-chat-app-default-rtdb.firebaseio.com",
      projectId: "rid-s-chat-app",
      storageBucket: "rid-s-chat-app.appspot.com",
      messagingSenderId: "277978332781",
      appId: "1:277978332781:web:34fe1b3da2db7433208964"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
