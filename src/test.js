import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("bZgKuUY0iGUmODezyZwd")
  .collection("cartItems")
  .doc("D6xqCoYmEjTomwckxoVa");

  firestore.doc('/users/bZgKuUY0iGUmODezyZwd/cartItems/D6xqCoYmEjTomwckxoVa')
  firestore.collection('/users/bZgKuUY0iGUmODezyZwd/cartItems')