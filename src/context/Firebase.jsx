import {createContext, useContext} from 'react';
import {initializeApp} from 'firebase/app';
// import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase,set,ref} from 'firebase/database'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
}; 

const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const firebaseContext = createContext(null);
export const useFirebase = () => useContext(firebaseContext);

export const FirebaseProvider = (props) => {
    // const signup = (email, password) => {
    //   return createUserWithEmailAndPassword(firebaseAuth, email, password);
    // };
  
    const putData = (key, data) => set(ref(database, key), data);
  
    return (
      <firebaseContext.Provider value={{putData }}>
        {props.children}
      </firebaseContext.Provider>
    );
  };
  