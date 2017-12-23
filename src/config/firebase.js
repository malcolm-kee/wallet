import firebase from "firebase";

const config = {
  apiKey: "AIzaSyALK9_TcyD6UubYxZZiS7gH0SXJfTvNwcw",
  authDomain: "wallet-ed7b3.firebaseapp.com",
  databaseURL: "https://wallet-ed7b3.firebaseio.com",
  projectId: "wallet-ed7b3",
  storageBucket: "wallet-ed7b3.appspot.com",
  messagingSenderId: "831081907096"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
