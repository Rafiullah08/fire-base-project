 // Import the functions you need from the SDKs you need
 import { initializeApp }  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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



var submitbtn = document.getElementById("submitbtn")
submitbtn.addEventListener("click", signup)

console.log(submitbtn, "btn")


function signup(){
  
  var email = document.getElementById("useremail").value
  var password = document.getElementById("userpassword").value

console.log( email, password)

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...

    console.log(user)
    alert("sucussfull signup")
    window.location.href= "./index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("user not signup")

  });


}

// window.signup = signup;

// login user




// window.loginfn =loginfn;
// window.signup = signup;