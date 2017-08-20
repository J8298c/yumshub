import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA_5CByNyUPhGk21QygPW4ffVDS6pOcPBc",
    authDomain: "goodeats-f4106.{firebaseApp}.com",
    databaseURL: "https://goodeats-f4106.firebaseio.com",
    storageBucket: "goodeats-f4106.appspot.com",
    messagingSenderId: "140477967686"
  };

const firebaseApp = firebase.initializeApp(config);
const goodeatsRef = firebase.database().ref('resturants');
const firebaseThings = {firebaseApp, goodeatsRef};

export default firebaseThings;