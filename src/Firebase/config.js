// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEhYVjjYf494-oQPiVHjuiruVEn2OBTfs",
  authDomain: "dantogames-34abb.firebaseapp.com",
  projectId: "dantogames-34abb",
  storageBucket: "dantogames-34abb.appspot.com",
  messagingSenderId: "564680972899",
  appId: "1:564680972899:web:d8cf8364fd6e174b9df656",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
