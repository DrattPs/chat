
var firebaseConfig = {
  apiKey: "AIzaSyDBms_AswKHRUB5iOcont0FfpH0qdqZT-o",
  authDomain: "chat-2d46a.firebaseapp.com",
  databaseURL: "https://chat-2d46a-default-rtdb.firebaseio.com",
  projectId: "chat-2d46a",
  storageBucket: "chat-2d46a.appspot.com",
  messagingSenderId: "604933669300",
  appId: "1:604933669300:web:8db56b853cdd7cbfcfb2e1"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("i1");
document.getElementById("w").innerHTML = "Welcome " + username + "!";



function addRoom() {

  room_name = document.getElementById("i1").value;

  firebase.database().ref("/").child(room_name).update({

    purpose: "adding room name"

  });
  localStorage.setItem("i1", room_name);
  document.getElementById("i1").value="";
  window.location= "chat.html";

}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("d1").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("d1").innerHTML += row;
    });
  });
}

getData();
