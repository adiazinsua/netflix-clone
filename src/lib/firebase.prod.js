import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAXObGn7zDcoLxcm5RIHjNtaKLIsXKYoz8",
  authDomain: "netflix-clone-592ca.firebaseapp.com",
  projectId: "netflix-clone-592ca",
  storageBucket: "netflix-clone-592ca.appspot.com",
  messagingSenderId: "895629614869",
  appId: "1:895629614869:web:fdd339cef718777f35131c",
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
