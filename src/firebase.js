import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNx0uaZZC2nb8c-XRNuSBRMY4MFvAQXbw",
  authDomain: "fir-f5a02.firebaseapp.com",
  databaseURL: "https://fir-f5a02.firebaseio.com",
  projectId: "fir-f5a02",
  storageBucket: "fir-f5a02.appspot.com",
  messagingSenderId: "1081013172437",
  appId: "1:1081013172437:web:c8dc1559adf952b0798a5c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

