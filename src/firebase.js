import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpq-35jVidpUvgxr03w7xrzzUl_79zaP4",
  authDomain: "facebookmessengerclone-26af3.firebaseapp.com",
  databaseURL: "https://facebookmessengerclone-26af3.firebaseio.com",
  projectId: "facebookmessengerclone-26af3",
  storageBucket: "facebookmessengerclone-26af3.appspot.com",
  messagingSenderId: "168660477672",
  appId: "1:168660477672:web:9b251fcb11318d79fc4b5d",
  measurementId: "G-N323NDZYV0",
});

const dB = firebase.firestore();

export default dB;
