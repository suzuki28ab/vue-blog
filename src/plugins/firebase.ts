import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

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

const authConfig = {
  signInSuccessUrl: "/test",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const db = app.firestore();

export default app;
export { auth, db };
