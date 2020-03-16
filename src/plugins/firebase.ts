import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDkR5CbuswO3gyx_pfBaow4YtKsPsCOXoE",
  authDomain: "test-blog-a5123.firebaseapp.com",
  databaseURL: "https://test-blog-a5123.firebaseio.com",
  projectId: "test-blog-a5123",
  storageBucket: "test-blog-a5123.appspot.com",
  messagingSenderId: "141061849087",
  appId: "1:141061849087:web:788dd398ee857b3b31b1ca",
  measurementId: "G-QHZ4QDG8P5"
};

firebase.initializeApp(config);
firebase.firestore();
export default firebase;
