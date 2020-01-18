var firebaseConfig = {
    apiKey: "AIzaSyDEtaBklL03s4Kd5Kjr3O3zEE8bCAPq7DY",
    authDomain: "rbcngi-d6e28.firebaseapp.com",
    databaseURL: "https://rbcngi-d6e28.firebaseio.com",
    projectId: "rbcngi-d6e28",
    storageBucket: "",
    messagingSenderId: "381596262011",
    appId: "1:381596262011:web:fd3a959d52ef30cb090cde"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database().ref("/natureProjects");

function sendData() {
    firebase.database().ref("natureProjects/").push({
        projectName: document.getElementById("projectSubmit").elements["projectName"].value,
        school: document.getElementById("projectSubmit").elements["school"].value,
        className: document.getElementById("projectSubmit").elements["className"].value,
        participantNumber: document.getElementById("projectSubmit").elements["participantNumber"].value,
        target: document.querySelector('input[name="target"]:checked').value,
        description: document.getElementById("projectSubmit").elements["description"].value,
        // image: document.getElementById("projectSubmit").elements["image"].value,
    });
    alert("Your data has been received!");
}