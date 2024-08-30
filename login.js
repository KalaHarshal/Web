// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDaHRU8O8eAs9-4JzP1kA-4U9w8oIUtve0",
    authDomain: "login-page-bea35.firebaseapp.com",
    databaseURL: "https://login-page-bea35-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "login-page-bea35",
    storageBucket: "login-page-bea35.appspot.com",
    messagingSenderId: "741827839948",
    appId: "1:741827839948:web:911b8ad555d5e5aaedbf69",
    measurementId: "G-F2VD5WK6DN"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
              alert("Successfully Logged In");
            // Signed in 
               window.location.href = 'home.html';
           
            console.log(result)
        })
        .catch((error) => {
            alert("Invalid credentials");
            console.log(error.code);
            console.log(error.message)
        });
}
