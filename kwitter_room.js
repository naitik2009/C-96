//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCEisIWfhBNPfXs931uCa6CNXFL_6LMPbM",
      authDomain: "c-abf99.firebaseapp.com",
      projectId: "c-abf99",
      storageBucket: "c-abf99.appspot.com",
      messagingSenderId: "301897104426",
      appId: "1:301897104426:web:446307c615f34f08a91753"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                   console.log("Room Name - " + Room_names);
                   row = "<div class = 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  //End code
            });
      });
}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
