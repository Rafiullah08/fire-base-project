// Import the functions you need from the SDKs you need
import { initializeApp }  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD28aLHM1FVWv4bvVfb3PPUH1_58-XnRN4",
  authDomain: "authentication-820f5.firebaseapp.com",
  projectId: "authentication-820f5",
  storageBucket: "authentication-820f5.appspot.com",
  messagingSenderId: "880717281144",
  appId: "1:880717281144:web:ad2d26fec22d37de257a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app,"app")

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log(auth , "auth")



var login = document.getElementById("loginbtn")
login.addEventListener("click", loginfn)
  

function loginfn(){
   var email = document.getElementById("useremail").value;
   var password = document.getElementById("userpassword").value
console.log(email, password)

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    var uid = window.localStorage.setItem("userid", userCredential.user.uid)
    console.log(uid)
    // ...
    alert("login successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  alert("login invalid")
  

  });


}


window.addEventListener("load", function(){
  var uid = window.localStorage.getItem("userid")
  console.log(uid, "uid")

  if(uid){
    window.location.replace("./dashboard.html")
  }else{
    window.location.replace("./signup.html")
  }
})