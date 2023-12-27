import { initializeApp }  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc,getDocs }  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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
  
  console.log(app,"app")
  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
console.log(db,"dbb")

window.addEventListener("load", function(){
    var uid = localStorage.getItem("userid")
    console.log("userid" , uid)
    if(!uid){
       window.location.replace("./index.html");
       return
    }
})

async function saveblog(){
    var btitle = document.getElementById("btitle").value;
    var desc = document.getElementById("desc").value;
    var image = document.getElementById("image").value
console.log(btitle, desc, image)

var blogobj= {
    btitle,
    desc,
    image
}

var adddata =await addDoc(collection (db, "blogs") ,blogobj )
console.log(adddata, "addata", adddata.id)

var getdata =await getDocs(collection(db, "blogs"))
console.log(getdata, "getdata", )

getdata.forEach(function(docs){
    console.log(docs.data())
});


var cardtitle =  document.getElementById("card-title").innerHTML;
var cardes =  document.getElementById("card-des").innerHTML;
console.log(cardtitle, cardes)
cardtitle = btitle.value;
cardes = desc.value


}


// blog map with 













window.saveblog = saveblog;