// 1. Initialize Firebase
 // Initialize Firebase
var config = {
    apiKey: "AIzaSyD1i6aT48Q83PUIEY-sdVXXRN3IIGJpzX4",
    authDomain: "train-scheduler-c1758.firebaseapp.com",
    databaseURL: "https://train-scheduler-c1758.firebaseio.com",
    projectId: "train-scheduler-c1758",
    storageBucket: "train-scheduler-c1758.appspot.com",
    messagingSenderId: "888136267331"
  };
firebase.initializeApp(config);


var database = firebase.database();


// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainTime = moment($("#time-input").val().trim(), "hh:mm:ss").format("X");
  var trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  // Alert
  alert("New Train has been added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().role;
  var trainTime = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().rate;

  // Employee Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);

  

});













