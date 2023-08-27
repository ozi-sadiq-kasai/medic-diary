import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
// apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
// authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
// projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
// storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
// messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
// appId: `${process.env.REACT_APP_APP_ID}`,
// measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}` 
  apiKey: "AIzaSyBOf2SlHreDy3rIOAURrZmMYJZ_crCIDow",
  authDomain: "medic-diaries.firebaseapp.com",
  projectId: "medic-diaries",
  storageBucket: "medic-diaries.appspot.com",
  messagingSenderId: "722731544448",
  appId: "1:722731544448:web:046872bf3b7ce5f8dcdb65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth,app }