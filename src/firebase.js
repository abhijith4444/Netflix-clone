// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrQY7ReQ84A1fucBMjg14M6u2mKl0fqBI",
  authDomain: "netflix-clone-6cddd.firebaseapp.com",
  projectId: "netflix-clone-6cddd",
  storageBucket: "netflix-clone-6cddd.appspot.com",
  messagingSenderId: "434441929728",
  appId: "1:434441929728:web:bf0933a0cefa55e76f04e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);                          
const db = getFirestore(app);



const signup = async(name,email,password)=>{
    try {
       const res= await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user;
       //store user in fire store db
       await addDoc(collection(db,"user"),{
        uid : user.uid,
        name,
        authProvider:"local",
        email,
       })
    } catch (err) {
        console.error(err);
       toast.error(err.code.split("/")[1]);
    }
}


const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (err) {
        console.error(err);
        toast.error(err.code.split("/")[1]);
    }
}

const logout = () =>{
    signOut(auth)
}

export {auth, db ,login, signup, signOut,logout}