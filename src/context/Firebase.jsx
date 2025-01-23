import {createContext, useContext} from 'react';
import {initializeApp} from 'firebase/app';
// import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase,set,ref} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCSaBx5kjUgEY-5ikXfYOWDhIynZef3x4M",
    authDomain: "tax-application-a44db.firebaseapp.com",
    projectId: "tax-application-a44db",
    storageBucket: "tax-application-a44db.firebasestorage.app",
    messagingSenderId: "32636362253",
    appId: "1:32636362253:web:a5c95454801d693130bf44",
    databaseURL: "https://tax-application-a44db-default-rtdb.firebaseio.com/"
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
  