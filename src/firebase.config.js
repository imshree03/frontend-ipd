import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUCdxaZBgclYZuFQaL5xviSKUabMIQhEI",
  authDomain: "tbimaging-ef866.firebaseapp.com",
  projectId: "tbimaging-ef866",
  storageBucket: "tbimaging-ef866.appspot.com",
  messagingSenderId: "267118925338",
  appId: "1:267118925338:web:4c2f1ddfc26b4452ec63a3",
};

const app = initializeApp(firebaseConfig);

export { app };
