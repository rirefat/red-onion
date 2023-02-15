import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey : process.env.REACT_APP_apiKey,
  authDomain : process.env.REACT_APP_authDomain,
  projectId : process.env.REACT_APP_projectId,
  storageBucket : process.env.REACT_APP_storageBucket,
  messagingSenderId : process.env.REACT_APP_messagingSenderId,
  appId : process.env.REACT_APP_appId
  
//   apiKey: "AIzaSyC8MMaj75tWqEP1H4q3Nc-pgL7Ax4GGMdY",
//   authDomain: "red-onion-foods-web.firebaseapp.com",
//   projectId: "red-onion-foods-web",
//   storageBucket: "red-onion-foods-web.appspot.com",
//   messagingSenderId: "364856475386",
//   appId: "1:364856475386:web:74e597cf76c6a23a9c5343"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;