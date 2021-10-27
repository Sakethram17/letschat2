const firebaseConfig = {
    apiKey: "AIzaSyBfzlDNnuFMylPkPTjesBJko4JuAEbRkN8",
    authDomain: "test1-eae37.firebaseapp.com",
    databaseURL: "https://test1-eae37-default-rtdb.firebaseio.com",
    projectId: "test1-eae37",
    storageBucket: "test1-eae37.appspot.com",
    messagingSenderId: "334301368085",
    appId: "1:334301368085:web:cf57e532eeb1f44935a31c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("Username");
   document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

   function addroom() {
          room_name = document.getElementById("room_name").value;
 
         localStorage.setItem("Roomname",room_name);
     
         window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
