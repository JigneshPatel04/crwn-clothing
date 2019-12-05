import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBC2XBavRUCYvG6AFFDUOwgE_Fbml5MGTo",
  authDomain: "crwn-db-a7983.firebaseapp.com",
  databaseURL: "https://crwn-db-a7983.firebaseio.com",
  projectId: "crwn-db-a7983",
  storageBucket: "crwn-db-a7983.appspot.com",
  messagingSenderId: "317306718127",
  appId: "1:317306718127:web:a7633297d9f5d0378e115a",
  measurementId: "G-Q63TBRPLB4"
};

export const createUserProfileDocument = async (userAuth, additinalData) => {
  if (!userAuth) return;
  console.log('userAuth',userAuth)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additinalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
