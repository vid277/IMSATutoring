firebase.auth().onAuthStateChanged(function(user){
    if (user){
        window.location.replace("mainPage.html");
    }
    else {
        window.location.replace("SignIn.html");
    }
})

function login(){
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    
        
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
  });
}