import firebase from 'firebase';


const env = process.env;
console.log('❗ firebase.js - line:5 `env` (type:',typeof env,')',env);

const credentials = ""// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: env.measurementId,
//   authDomain: env.authDomain,
//   projectId: env.projectId,
//   storageBucket: env.storageBucket,
//   messagingSenderId: env.messagingSenderId,
//   appId: env.appId,
//   measurementId: env.measurementId
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fbConfig = {
  apiKey: "AIzaSyAzXYi9BGHB2obQnsFeati11AQRCuAujP0",
  authDomain: "my-todo-a3582.firebaseapp.com",
  projectId: "my-todo-a3582",
  storageBucket: "my-todo-a3582.appspot.com",
  messagingSenderId: "42004174450",
  appId: "1:42004174450:web:20b013b45ce10d826254eb",
  measurementId: "G-RV3XS96QV3"
};

console.log('❗ firebase.js - line:29 `fbConfig` (type:',typeof fbConfig,')',fbConfig);

firebase.initializeApp(fbConfig);

export const db = firebase.app().firestore();
